import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ReceiptIcon({ color }) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13 14H9a1 1 0 000 2h4a1 1 0 000-2zm4-10h-1.18A3 3 0 0013 2h-2a3 3 0 00-2.82 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 1a1 1 0 011-1h2a1 1 0 011 1v1h-4V5zm8 14a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1v1a1 1 0 001 1h6a1 1 0 001-1V6h1a1 1 0 011 1v12zm-3-9H9a1 1 0 000 2h6a1 1 0 000-2z"
                fill={color}
            />
        </Svg>
    )
}
