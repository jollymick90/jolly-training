function canVisitAllRooms(rooms: number[][]): boolean {

function searchKeys(rooms: number[][], i: number, visited: Map<number, boolean>) {
    // Search in each key on the room
    rooms[i].forEach(key => {
        if (visited.get(key) === undefined || visited.get(key) === null)
        {
            // Visit the current room
            visited.set(key, true);
            searchKeys(rooms, key, visited);
        }
    })
}

const visited = new Map<number, boolean>();

visited.set(0, true);
searchKeys(rooms,)

}