import { useEffect, useRef } from 'react';

interface UseWebSocketOptions {
  url: string;
  onMessage?: (data: any) => void;
}

/**
 * Basic WebSocket hook - handles connection and disconnection
 * 
 * TODO for candidates:
 * - Implement reconnection logic
 * - Add error handling
 * - Add connection status tracking
 * - Handle edge cases
 * 
 * @example
 * useWebSocket({
 *   url: 'wss://ws-mock-server-1.onrender.com',
 *   onMessage: (data) => {
 *     console.log('Received:', data);
 *   }
 * });
 */
export function useWebSocket({ url, onMessage }: UseWebSocketOptions) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      // console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage?.(data);
    };

    ws.onclose = () => {
      // console.log('WebSocket disconnected');
    };


    return () => {
      ws.close();
    };
  }, [url]);

  return {
    closeSocket: () => {
      wsRef.current?.close();
    }
  }
}
