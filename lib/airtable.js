const Airtable = require("airtable");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });

const base = airtable.base(process.env.AIRTABLE_BASE_ID);

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

async function getTable(table) {
  const records = await base(table).select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}


export {
  getTable
};
  

