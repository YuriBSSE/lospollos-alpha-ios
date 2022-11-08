export default function rowFormate(arr, columns) {
    return arr.reduce(function (result, value, index, array) {
        if (index % columns === 0)
            result.push(array.slice(index, index + columns));
        return result;
    }, []);
}