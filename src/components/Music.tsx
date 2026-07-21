import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';

/* â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
type CoverSong = {
  id: number;
  title: string;
  label: string;
  subLabel: string;
  artist: string;
  category: 'Hindi' | 'English' | 'Unplugged';
  date: string;
  dateRaw: Date;
  audioSrc: string;
};

/* â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const covers: CoverSong[] = [
  {
    id: 1,
    title: 'Manjha',
    label: 'Manjha',
    subLabel: 'COVER',
    artist: 'Arijit Singh',
    category: 'Hindi',
    date: 'May 12, 2024',
    dateRaw: new Date('2024-05-12'),
    audioSrc: '/music/Manjha.mp3',
  },
  {
    id: 2,
    title: 'Jee Le Zaraa',
    label: 'Jee Le Zaraa',
    subLabel: 'COVER',
    artist: 'Arijit Singh',
    category: 'Hindi',
    date: 'April 28, 2024',
    dateRaw: new Date('2024-04-28'),
    audioSrc: '/music/Jee Le Zaraa.mp3',
  },
  {
    id: 3,
    title: 'Sajni Re',
    label: 'Sajni Re',
    subLabel: 'COVER',
    artist: 'Arijit Singh',
    category: 'Hindi',
    date: 'April 10, 2024',
    dateRaw: new Date('2024-04-10'),
    audioSrc: '/music/Sajni Re.mp3',
  },
  {
    id: 4,
    title: 'Softly Unplugged',
    label: 'Softly',
    subLabel: 'UNPLUGGED',
    artist: 'Karan Aujla',
    category: 'Unplugged',
    date: 'March 22, 2024',
    dateRaw: new Date('2024-03-22'),
    audioSrc: '/music/Softly Unplugged.mp3',
  },
  {
    id: 5,
    title: 'Tuhi Re Unplugged',
    label: 'Tuhi Re',
    subLabel: 'UNPLUGGED',
    artist: 'Arijit Singh',
    category: 'Unplugged',
    date: 'March 5, 2024',
    dateRaw: new Date('2024-03-05'),
    audioSrc: '/music/Tuhi Re Unplugged.mp3',
  },
  {
    id: 6,
    title: 'Long Distance Love',
    label: 'Long Distance',
    subLabel: 'COVER',
    artist: 'Arijit Singh',
    category: 'Hindi',
    date: 'February 18, 2024',
    dateRaw: new Date('2024-02-18'),
    audioSrc: '/music/Long Distance Love.mp3',
  },
];

/* â”€â”€â”€ Global singleton audio so only one song plays at a time â”€â”€â”€â”€â”€â”€â”€ */
let globalAudio: HTMLAudioElement | null = null;
let globalStopCallback: (() => void) | null = null;

function stopGlobal() {
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
  }
  if (globalStopCallback) globalStopCallback();
  globalStopCallback = null;
}

/* â”€â”€â”€ Helper: format mm:ss â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function fmt(s: number) {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

/* â”€â”€â”€ Spinning reel angle animation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function useReelAngle(playing: boolean) {
  const [angle, setAngle] = useState(0);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);

  useEffect(() => {
    if (playing) {
      const step = (now: number) => {
        const delta = last.current ? now - last.current : 0;
        last.current = now;
        setAngle((a) => (a + delta * 0.18) % 360); // ~65 rpm feel
        raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    } else {
      if (raf.current) cancelAnimationFrame(raf.current);
      last.current = 0;
    }
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [playing]);

  return angle;
}

/* â”€â”€â”€ Cassette SVG â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function CassetteSVG({
  label, subLabel, reelAngle,
}: {
  label: string; subLabel: string; reelAngle: number;
}) {
  const spokeAngles = [0, 60, 120, 180, 240, 300];

  const Reel = ({ cx, cy }: { cx: number; cy: number }) => (
    <g transform={`rotate(${reelAngle}, ${cx}, ${cy})`}>
      <circle cx={cx} cy={cy} r={33} fill="#252525" />
      <circle cx={cx} cy={cy} r={25} fill="#181818" stroke="#3a3a3a" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={15} fill="#c0c0c0" />
      {spokeAngles.map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + Math.cos(r) * 6} y1={cy + Math.sin(r) * 6}
            x2={cx + Math.cos(r) * 22} y2={cy + Math.sin(r) * 22}
            stroke="#999" strokeWidth="1.8"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={5} fill="#888" />
    </g>
  );

  return (
    <svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Outer shell */}
      <rect x="4" y="4" width="412" height="262" rx="22" ry="22" fill="#1a1a1a" />

      {/* Corner screws */}
      {([[24, 24], [396, 24], [24, 246], [396, 246]] as [number, number][]).map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" fill="#2e2e2e" stroke="#555" strokeWidth="1" />
          <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="#777" strokeWidth="1.2" />
          <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="#777" strokeWidth="1.2" />
        </g>
      ))}

      {/* Cream label */}
      <rect x="42" y="14" width="336" height="176" rx="10" ry="10" fill="#F5F0E0" />
      {[38, 45, 52, 59, 66].map((y, i) => (
        <line key={i} x1="58" y1={y} x2="362" y2={y} stroke="#d8d0b8" strokeWidth="0.8" />
      ))}

      {/* Song name */}
      <text x="210" y="95" textAnchor="middle" fill="#1a1a1a"
        fontSize={label.length > 13 ? '20' : '26'}
        fontFamily="'Pacifico', 'Dancing Script', Georgia, cursive"
        fontStyle="italic">{label}</text>
      <text x="210" y="114" textAnchor="middle" fill="#666" fontSize="9"
        fontFamily="Arial, sans-serif" letterSpacing="2.5">{subLabel}</text>

      {/* C-90 / label text */}
      <text x="58" y="180" fill="#1a1a1a" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="bold">C-90</text>
      <text x="280" y="172" fill="#444" fontSize="8" fontFamily="Arial, sans-serif">NORMAL</text>
      <text x="280" y="182" fill="#444" fontSize="8" fontFamily="Arial, sans-serif">POSITION (TYPE I)</text>

      {/* Rainbow stripes */}
      <rect x="42" y="130" width="336" height="12" fill="#E83030" />
      <rect x="42" y="142" width="336" height="12" fill="#F0A500" />
      <rect x="42" y="154" width="336" height="12" fill="#F5D800" />
      <rect x="42" y="166" width="336" height="12" fill="#2EAA2E" />
      <rect x="42" y="178" width="336" height="12" fill="#1A60BB" />

      {/* Dark reel window */}
      <rect x="88" y="126" width="244" height="82" rx="8" ry="8" fill="#111" />

      {/* Spinning reels */}
      <Reel cx={152} cy={167} />
      <Reel cx={268} cy={167} />

      {/* Tape window */}
      <path d="M176 155 Q210 147 244 155 L244 179 Q210 187 176 179 Z" fill="#3d2010" />
      <line x1="176" y1="161" x2="244" y2="161" stroke="#5a3820" strokeWidth="1" />
      <line x1="176" y1="173" x2="244" y2="173" stroke="#5a3820" strokeWidth="1" />

      {/* Bottom cut-outs */}
      <rect x="76" y="220" width="42" height="32" rx="6" fill="#111" />
      <rect x="189" y="220" width="42" height="32" rx="6" fill="#111" />
      <rect x="302" y="220" width="42" height="32" rx="6" fill="#111" />

      {/* Center play icon removed per request */}
    </svg>
  );
}

/* â”€â”€â”€ Card animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* â”€â”€â”€ Song Card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function SongCard({ song, index }: { song: CoverSong; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reelAngle = useReelAngle(isPlaying);

  /* Create audio element once */
  useEffect(() => {
    const audio = new Audio();
    audio.src = song.audioSrc;
    audio.preload = 'none';
    audio.volume = 1;
    // iOS Safari requires user gesture; this is handled via click
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('ended', () => { setIsPlaying(false); setCurrentTime(0); });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [song.audioSrc]);

  const togglePlay = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Stop any other playing song globally
      if (globalAudio && globalAudio !== audio) {
        stopGlobal();
      }
      globalAudio = audio;
      globalStopCallback = () => setIsPlaying(false);

      // On iOS Safari, load() before play() ensures it works
      if (audio.readyState === 0) audio.load();
      audio.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  }, [isPlaying]);

  const seek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setCurrentTime(t);
  }, []);

  const changeVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = Number(e.target.value);
    audio.volume = v;
    setVolume(v);
    setMuted(v === 0);
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
  }, [muted]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-[#FCFAF7] border-2 border-[#D3CBB8] rounded-[24px] overflow-hidden"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
      whileHover={{
        y: -4, scale: 1.015,
        boxShadow: '0 16px 48px rgba(0,0,0,0.13)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* â”€â”€ Cassette (clickable to play/pause) â”€â”€ */}
      <div
        className="relative w-full p-3 pb-2 bg-[#EEEBE2] cursor-pointer select-none"
        onClick={togglePlay}
        onTouchEnd={togglePlay}
        role="button"
        aria-label={isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
      >
        <CassetteSVG
          label={song.label}
          subLabel={song.subLabel}
          reelAngle={reelAngle}
        />
      </div>

      {/* â”€â”€ Player Controls â”€â”€ */}
      <div className="px-4 pt-2 pb-1">
        {/* Seek bar */}
        <div className="relative w-full h-2 bg-[#D3CBB8] rounded-full overflow-hidden mb-1.5 cursor-pointer">
          <div
            className="absolute left-0 top-0 h-full bg-[#6B8F57] rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.5"
            value={currentTime}
            onChange={seek}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Seek"
          />
        </div>

        {/* Time + volume row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] text-[#888] tabular-nums">{fmt(currentTime)} / {fmt(duration)}</span>

          {/* Volume â€” hidden on very small screens, shown md+ */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={toggleMute}
              className="text-[#888] hover:text-[#111] transition-colors"
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted || volume === 0
                ? <VolumeX className="w-3.5 h-3.5" />
                : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <input
              type="range" min="0" max="1" step="0.05" value={muted ? 0 : volume}
              onChange={changeVolume}
              onClick={(e) => e.stopPropagation()}
              className="w-16 h-1 accent-[#6B8F57] cursor-pointer"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>

      {/* â”€â”€ Card Bottom Info â”€â”€ */}
      <div className="flex items-center justify-between px-4 pb-3.5 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Play/pause icon badge */}
          <button
            onClick={togglePlay}
            onTouchEnd={togglePlay}
            className="shrink-0 w-9 h-9 rounded-xl bg-[#9CAF88]/15 border border-[#9CAF88]/30 flex items-center justify-center hover:bg-[#9CAF88]/30 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying
              ? <Pause className="w-4 h-4 text-[#6B8F57] fill-[#6B8F57]" />
              : <Play className="w-4 h-4 text-[#6B8F57] fill-[#6B8F57]" />}
          </button>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-[#111111] font-heading leading-tight truncate">{song.title}</h3>
          </div>
        </div>

        {/* Mobile volume (replaces the hidden desktop one) */}
        <div className="sm:hidden flex items-center gap-1">
          <button onClick={toggleMute} className="text-[#888]" aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted || volume === 0
              ? <VolumeX className="w-3.5 h-3.5" />
              : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        <Music2 className="w-4 h-4 text-[#aaa] shrink-0" />
      </div>
    </motion.article>
  );
}

/* â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function Music() {
  return (
    <section id="music" className="pt-16 md:pt-20 pb-16 md:pb-24 relative">
      <div className="w-full max-w-[1400px] mx-auto">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-12 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-[#111111] bg-white text-sm font-bold text-[#111111] mb-5 shadow-[2px_2px_0_#111111]"
            >
              <span className="text-base"></span>
              Beyond Code
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold font-heading tracking-tight text-[#111111] leading-[1.1] mb-5">
              Music is The<br />
              <span>Fuel of My Energy.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-[#2D2D2D] leading-relaxed font-medium max-w-lg">
              When I'm not building software or analyzing data,<br className="hidden md:block" />
              you'll probably find me recording song covers.<br />
              Music keeps me creative, grounded and inspired.
            </p>
          </motion.div>
          <div className="flex-1 hidden lg:block" aria-hidden="true" />
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {covers.map((song, i) => (
            <SongCard key={song.id} song={song} index={i} />
          ))}
        </div>

        {/* Thanks for listening */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <span className="font-cursive text-2xl md:text-3xl text-[#111111] -rotate-2 inline-block">
            Thanks for listening!
          </span>
        </motion.div>

      </div>
    </section>
  );
}
