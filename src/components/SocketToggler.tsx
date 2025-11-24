export default function SocketToggler({ isSocketConnected, setIsSocketConnected }: { isSocketConnected: boolean, setIsSocketConnected: (isSocketConnected: boolean) => void }) {
    const toggleSocket = () => {
        setIsSocketConnected(!isSocketConnected);
    }

    return (
        <>
            <div className="w-full text-black text-center">Connection Status: {isSocketConnected ? 'Connected' : 'Disconnected'}</div>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={toggleSocket}>Toggle Socket</button>
        </>
    )
}
