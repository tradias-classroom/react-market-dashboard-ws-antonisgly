import { useState, useRef, useEffect } from 'react';
import { useWebSocket } from './hooks/useWebSocket';
import Table from './components/Table';
import SocketToggler from './components/SocketToggler';

export default function App() {
  const [data, setData] = useState([]);
  const [isSocketConnected, setIsSocketConnected] = useState(true);
  const dataRef = useRef(new Map());

  const { closeSocket } = useWebSocket({
    url: 'wss://ws-mock-server-1.onrender.com',
    onMessage: (data) => {
      dataRef.current.set(data.symbol, data);
      const arrOfData = Array.from(dataRef.current.values());
      setData(arrOfData);
    }
  });

  useEffect(() => {
    if (!isSocketConnected) closeSocket();
    // else openSocket();
  }, [isSocketConnected]);

  console.log('asd');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-4xl text-sky-500 font-bold underline mb-4">
        Welcome to the Tradias Exercise! 🎉
      </h1>
      <SocketToggler isSocketConnected={isSocketConnected} setIsSocketConnected={setIsSocketConnected} />
      <Table data={data} />
    </div>
  );
}