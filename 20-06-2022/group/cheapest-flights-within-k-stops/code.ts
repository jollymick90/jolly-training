function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {

    const buildFlightMap = (flights: number[][]) => {

        const roomsMapped: Map<number, { dest: number, price: number }[]> = new Map();

        for (let i = 0; i < flights.length; i++) {
            const nodeStart = flights[i][0];

            const destPriceMap: { dest: number, price: number }[] = roomsMapped.get(nodeStart) || [];
            destPriceMap.push({ dest: flights[i][1], price: flights[i][2] })

            roomsMapped.set(nodeStart, destPriceMap);
        }

        return roomsMapped;
    }

    const mapFlights = buildFlightMap(flights)

    const destinationsQueue = mapFlights.get(src);
    if (!destinationsQueue) return -1;

    const citiesVisited = new Map<number, boolean>();
    const routesWeight = new Map<number, number>();

    const routesCandidate = new Map<number, number>();

    while (destinationsQueue.length > 0) {
        const cityDest = destinationsQueue.shift();
        
        if (cityDest && !citiesVisited.has(cityDest.dest)) {
            citiesVisited.set(cityDest.dest, true);
            console.log("node visited", cityDest);

            if (cityDest.dest === dst) {
                //end path
                routesCandidate.set(cityDest.dest, totalPrice);
            } else {
                routesWeight.set()
                //update path and add queue
                destinationsQueue.push(...(mapFlights.get(cityDest.dest) || []))
            }
        }

    }

    return -1;
};