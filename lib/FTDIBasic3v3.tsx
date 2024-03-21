export const FTDIBasic3v3 = () => (
  <group>
    <bug
      name="U1"
      port_arrangement={{
        left_side: {
          pins: [16, 15, 20, 17, 4, 27, 28, 19, 26, 25, 7, 18, 21],
          direction: "top-to-bottom",
        },
        right_side: {
          pins: [1, 5, 11, 3, 2, 9, 10, 6, 23, 22, 14, 13, 12],
          direction: "top-to-bottom",
        },
      }}
      footprint="ssop28Db"
      port_labels={{
        "1": "TXD",
        "5": "RXD",
        "11": "CTS",
        "3": "RTS",
        "2": "DTR",
        "9": "DSR",
        "10": "DCD",
        "6": "RI",
        "23": "TXLED",
        "22": "RXLED",
        "14": "PWRUN",
        "13": "TXDEN",
        "12": "SLEEP",
        "16": "USBDM",
        "15": "USBDP",
        "20": "VCC",
        "17": "3V3OUT",
        "4": "VCCIO",
        "27": "OSCI",
        "28": "OSCO",
        "19": "RESET",
        "26": "TEST",
        "25": "AGND",
        "7": "GND7",
        "18": "GND18",
        "21": "GND21",
      }}
    />
    <resistor
      resistance="1kohm"
      name="R1"
      footprint="0805"
      center={[3, 0]}
      rotation="90deg"
    />
    <resistor
      resistance="1kohm"
      name="R2"
      footprint="0805"
      center={[4.5, 0]}
      rotation="90deg"
    />
    <diode name="LED1" footprint="0805" rotation="90deg" center={[3, 2]} />
    <diode name="LED2" footprint="0805" rotation="90deg" center={[4.5, 2]} />
    <netalias net="5V" center={[3, -2]} />
    <netalias net="5V" center={[4.5, -2]} />
    <trace path={[".5V", ".R2 > port.left"]} />
    <trace path={[".5V", ".R1 > port.left"]} />
    <trace path={[".R1 > port.right", ".LED1 > port.left"]} />
    <trace path={[".R2 > port.right", ".LED2 > port.left"]} />
    <trace path={[".LED1 > port.right", ".U1 > .TXLED"]} />
    <trace path={[".LED2 > port.right", ".U1 > .RXLED"]} />
    <netalias net="GND" center={[-2, 4]} rotation="180deg" />
    <netalias net="GND" center={[-5, 3]} rotation="180deg" />
    <netalias net="GND" center={[-6, 3]} rotation="180deg" />
    <netalias net="GND" center={[-7, 3]} rotation="180deg" />
    <netalias net="GND" center={[-8, 2]} rotation="180deg" />
    {/* <netalias net="5V" center={[-8, -8]} /> */}
    <bug
      name="U2"
      port_arrangement={{
        left_size: 0,
        right_size: 4,
      }}
      center={[-10, 0]}
      port_labels={{
        "1": "GND",
        "2": "VBUS",
        "3": "DM",
        "4": "DP",
      }}
    />
    <bug
      name="JP1"
      center={[8, 0]}
      port_arrangement={{
        left_size: 6,
      }}
      port_labels={{
        1: "GND",
        2: "CTS",
        3: "POWER",
        4: "TX0",
        5: "RXT",
        6: "DTR",
      }}
    />
    <trace path={[".U1 > .GND21", ".GND"]} />
    <trace path={[".U1 > .GND18", ".GND"]} />
    <trace path={[".U1 > .GND7", ".GND"]} />
    <trace path={[".U1 > .AGND", ".GND"]} />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      center={[-7, 1]}
      rotation="90deg"
    />
    <capacitor name="C5" capacitance="10uF" center={[-6, 1]} rotation="90deg" />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      center={[-5, 1]}
      rotation="90deg"
    />
    <trace path={[".VBUS", ".C2 > port.left"]} />
    <trace path={[".GND", ".C2 > port.right"]} />
    <trace path={[".C5 > port.left", ".VBUS"]} />
    <trace path={[".C5 > port.right", ".GND"]} />
    <netalias net="3v3" center={[-5, -2]} />
    <trace path={[".C1 > port.left", ".3v3"]} />
    <trace path={[".C1 > port.right", ".GND"]} />
    <netalias net="5v5" center={[-4, -2]} />
    <trace path={[".VBUS", ".5v5"]} />

    <trace path={[".DM", ".U1 > .USBDM"]} />
    <trace path={[".DP", ".U1 > .USBDP"]} />
  </group>
)
