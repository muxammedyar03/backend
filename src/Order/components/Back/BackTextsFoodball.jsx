import { useContext } from "react";
import { BackFoodballTextContext } from "../../Context/BackFoodballTextContext";
import { useParams } from "react-router-dom";

const BackTextsFootball= ({ className, TextStyle, NumberStyle, printArea}) => {
  const { numberInput, change_Name } = useContext(BackFoodballTextContext);
  const { id } = useParams();

  const checkFont = (id) => {
    switch (id) {
      case "Real Madrid":
        return "RealFont";
      case "Manchester City":
        return "manchestrFont";
      case "Juventus Club":
        return "juventusFont";
      default:
        return "RealFont";
    }
  };

  const printAreaWidth = 300, printAreaHeight= 300;

  return (
    <g width={printAreaWidth + 'px'} height={printAreaHeight+ 'px'} transform={`translate(0,-25)`} stroke="#000" clipPath="url(#clipPath)">
      <defs>
        <clipPath id="clipPath">
          <rect width={printAreaWidth+ 'px'} height={printAreaHeight+ 'px'} />
        </clipPath>
      </defs>

      {/* Orqa fon kvadrati */}
      <rect width={printAreaWidth+ 'px'} height={printAreaHeight+ 'px'} fill="transparent" />

      {/* Raqam (katta text) */}
      <text
        x={printAreaWidth / 2} // Markaziy joylashuv
        y={printAreaHeight * 0.6}
        textAnchor="middle"
        className={`${NumberStyle} font-bold text-[10rem] ${checkFont(id)} cursor-pointer select-none`}
        style={{ fontSize: "14rem", lineHeight: 1 }}
      >
        {numberInput}
      </text>

      {/* Ism (kichik text) */}
      <text
        x={printAreaWidth / 2}
        y={printAreaHeight * 0.8}
        textAnchor="middle"
        className={`${TextStyle} font-semibold text-4xl ${checkFont(id)} text-center cursor-pointer`}
        style={{fontSize: "2rem"}}
        lengthAdjust="spacingAndGlyphs" // Matnni siqib moslash
      >
        {change_Name}
      </text>
    </g>
  );
};

export default BackTextsFootball;

