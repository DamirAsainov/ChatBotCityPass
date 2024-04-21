const {Client} = require('@botpress/client')

const client = new Client({
    token: 'bp_pat_Lm24wLcwWTlKrNwGsGzuIqtDq7c0GSfTtAGc',
    botId: '6cda6528-dcb7-47d0-8cda-534580bddd35',
    workspaceId: 'wkspace_01HVX56C32ET3HJVC3RHT0HA83'
})
async function findTableData() {
    const { rows, limit, offset, count } = await client.findTableRows({
        table: 'Data2Table',
        limit: 20,
        offset: 0,
        filter: {},
        orderBy: 'row_id',
        orderDirection: 'desc'
    })
    return rows
}
async function upsertTableData(tableName, name){
    const { rows, inserted, updated, errors, warnings } = await client.upsertTableRows({
        table: {tableName},
        keyColumn: 'id',
        rows: [
            {
                Name: {name}
            }
        ]
    })
}
async function deleteTableData(tableName,name){
    const { deletedRows } = await client.deleteTableRows({
        table: 'Data2Table',
        // Specify a list of IDs
        ids: [1, 2, 3],
        // Or use a filter (caution: all rows matching the filter will be deleted. It's advisable to first test with the findTableRows query)
        filter: { Name: {name} },
        // Deletes every row within this table, irreversible action
        deleteAllRows: true
    })
}

async function checkResult(){
    const rows = await findTableData();
    console.log(rows[0].Transport + "| " + rows[0].Destination)
    if(!rows){
        return;
    }
    return {destination: rows[0].Destination, transport: rows[0].Transport}
}

module.exports.findTableData = findTableData;
module.exports.checkResults = checkResult;