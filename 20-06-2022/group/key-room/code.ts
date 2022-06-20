function canVisitAllRooms(rooms: number[][]): boolean {

    const buildRooms = (rooms: number[][]) => {
        const roomsMapped: Map<number, number[]> = new Map();
        for (let i = 0; i < rooms.length; i++) 
            roomsMapped.set(i,rooms[i]);          
        return roomsMapped;
    }

    const readRooms = (graph: Map<number, number[]>): number => {
        const nodeVisited: Map<number, boolean> = new Map();
        const searchQueue = [...graph.get(0) || []];
        nodeVisited.set(0, true);
        while (searchQueue.length > 0) { 
            const _node = searchQueue.shift();
            if (_node !== undefined && !nodeVisited.has(_node)) {
                console.log("node visited", _node)
                nodeVisited.set(_node, true);
                const nextListNode = graph.get(_node) || [];
                searchQueue.push(...nextListNode);
            }
        }
        return nodeVisited.size
    }

    const mappedRooms = buildRooms(rooms);

    return readRooms(mappedRooms) === rooms.length;
};