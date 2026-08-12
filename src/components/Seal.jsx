export default function Seal({ size = 120 }) {
  return (
    <svg
      className="seal"
      width={size}
      height={size * 1.22}
      viewBox="0 0 82 100"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="80" height="98" rx="8" fill="#B23A2C" />
      <rect x="6" y="6" width="70" height="88" rx="5" stroke="#F4F0E7" strokeOpacity="0.45" />
      <text
        x="41"
        y="42"
        textAnchor="middle"
        fill="#F4F0E7"
        fontSize="30"
        fontFamily="Songti SC, STSong, serif"
        fontWeight="600"
      >
        文
      </text>
      <text
        x="41"
        y="78"
        textAnchor="middle"
        fill="#F4F0E7"
        fontSize="30"
        fontFamily="Songti SC, STSong, serif"
        fontWeight="600"
      >
        涛
      </text>
    </svg>
  );
}
