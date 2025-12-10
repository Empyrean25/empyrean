{stack.slice(0, 5).map((img, i) => {
  // If i === 0 → this is the previously swiped image → goes to the LEFT
  const isLeft = i === 0;

  // Right-side fan (your original values)
  const rightX = i * 10;
  const rightY = i * 14;
  const rightRotate = (i - 2) * 2;

  // Left-side fan (mirrored version)
  const leftX = -40 - i * 10;    // shifted left
  const leftY = i * 14;          // same top-heavy reveal
  const leftRotate = (2 - i) * 2; // mirrored rotation

  // Use left or right positioning
  const x = isLeft ? leftX : rightX;
  const y = isLeft ? leftY : rightY;
  const rotate = isLeft ? leftRotate : rightRotate;

  const scale = 1 - i * 0.03;

  return (
    <motion.div
      key={i}
      drag={isLeft ? false : "x"}  // only the right-most top card can be dragged
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={isLeft ? {} : { scale: 1.04, rotate: 0 }}
      onDragEnd={(e, info) => {
        if (!isLeft && info.offset.x < -60 && i === 0) cycleStack();
      }}
      style={{ zIndex: 100 - i }}
      className="absolute w-[300px] h-[450px] rounded-2xl shadow-2xl overflow-hidden bg-black/10 backdrop-blur-sm"
      animate={{ x, y, scale, rotate }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
      }}
    >
      <Image
        src={img}
        alt={`${alt} ${i + 1}`}
        fill
        className="object-cover select-none"
        draggable={false}
        unoptimized
      />
    </motion.div>
  );
})}
