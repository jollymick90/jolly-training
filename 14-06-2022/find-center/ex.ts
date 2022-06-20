function findCenter(edges: number[][]): number {
    
    let center = 0;

    const firstNode = edges[0];
    const secondNode = edges[1];
    
    for (const n of firstNode) {
        if (secondNode.includes(n))
            return n;
    }
    
    
    
    return center;
 
};