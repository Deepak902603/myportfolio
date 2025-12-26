import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-2xl animate-blob"
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

BlurBlob.defaultProps = {
  position: { top: "50%", left: "50%" },
  size: { width: "140px", height: "140px" },
};

export default BlurBlob;
