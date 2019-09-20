export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {    //49 26:00
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps}
        }
        return u;
    })
    
}


