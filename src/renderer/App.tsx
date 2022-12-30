import './App.css';

export default function App() {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          const port = await navigator.serial.requestPort();
          const info = port.getInfo();
          alert(JSON.stringify(info));
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Test WebSerial API
    </button>
  );
}
