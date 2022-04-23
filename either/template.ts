type sel = "roldId" | "teamId"
type myItem<T> = T extends sel[0] ? sel[0] : sel[1];

const myselobj:myItem = {
    roldId: 123
}