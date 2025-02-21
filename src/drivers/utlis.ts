import { Column } from "../gen/plugin/codegen_pb";

export function fieldName(
    prefix: string,
    index: number,
    column?: Column
): string {
    let name = `${prefix}_${index}`;
    if (column) {
        name = column.name;
    }
    return name // this was converting to camelCase but i ran into issues with that
    // is there a problem with not converting to camelCase?
    // TODO: CHECK THIS OUT
    // ps. it's me jonathan who wrote this so wen me in the future comes back
    // yeh it's me
}

export function argName(index: number, column?: Column): string {
    return fieldName("arg", index, column);
}

export function colName(index: number, column?: Column): string {
    console.log(column);
    return fieldName("col", index, column);
}
