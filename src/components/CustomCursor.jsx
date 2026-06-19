export default function CustomCursor({ pos, ringPos, hovering }) {
  return (
    <>
      <div
        className="cursor"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? '20px' : '12px',
          height: hovering ? '20px' : '12px',
        }}
      ></div>
      <div
        className="cursor-ring"
        style={{
          left: ringPos.x,
          top: ringPos.y,
          width: hovering ? '54px' : '36px',
          height: hovering ? '54px' : '36px',
        }}
      ></div>
    </>
  );
}
