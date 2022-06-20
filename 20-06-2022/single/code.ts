


function validPath(n: number, edges: number[][], source: number, destination: number): boolean {

    const search = (source: number, destination: number, graph: Map<number, number[]>): boolean => {
        const searched: Map<number, boolean> = new Map();
        const searchQueue = [...graph.get(source) || []];

        if (searchQueue.length === 0) {
            return source === destination;
        }

        while (searchQueue.length > 0) {
            const _node = searchQueue.shift();
            console.log("poped", _node)
            if (_node !== undefined && !searched.has(_node)) {
                if (_node === destination) {
                    console.log("FIND")
                    return true;
                } else {
                    const nextListNode = graph.get(_node) || [];
                    console.log("nextListNode", [...nextListNode])
                    searchQueue.push(...nextListNode);
                    console.log("searchQueue", [...searchQueue])
                    searched.set(_node, true)
                    console.log("searched", [...searched])

                }

            }
        }

        return false;

    }
    const graph = new Map<number, number[]>();
    //build map
    for (const ed of edges) {
        const startNode = ed[0];
        const endNode = ed[1];

        const startNodesList = [endNode];
        const endNodesList = [startNode];

        const currentNodeStartList = graph.get(startNode) || [];
        const currentNodeEndList = graph.get(endNode) || []

        graph.set(startNode, [...currentNodeStartList,...startNodesList])
        graph.set(endNode, [...currentNodeEndList,...endNodesList])
    }


    console.log("graph",graph)

    return search(source, destination, graph);
};