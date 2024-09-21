import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { Html } from '@react-three/drei';
import state from '../utils/state';

function Picker() {
  const snap = useSnapshot(state);
  return (
    <Html position={[-2, 0, 0]}>
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
        <h1 className="text-white uppercase font-semibold text-xl">{snap.current}</h1>
      </div>
    </Html>
  );
}

export default Picker;
