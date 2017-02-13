import io from 'socket.io-client';

export const SERVER_PATH = 'http://localhost:4040';
export const socket = io.connect(SERVER_PATH);