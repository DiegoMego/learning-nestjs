const CompanyQueries = {
  GetCompaniesTable(ordercolumn, lastvalue, searchvalue) {
    const query = 'select * from company ';
    query += this.GetCompaniesTableWhereClause(
      ordercolumn,
      lastvalue,
      searchvalue,
    );
    query += this.GetCompaniesTableOrderByClause(ordercolumn);
    return query;
  },

  GetCompaniesTableWhereClause(ordercolumn, lastvalue = '', searchvalue = '') {
    const whereClause = 'where true is true ';
    if (lastvalue) whereClause += `and ${ordercolumn} < ${lastvalue} `;
    if (searchvalue) whereClause += `and name like '%${searchvalue}%'`;
    return whereClause;
  },

  GetCompaniesTableOrderByClause(ordercolumn) {
    return `order by ${ordercolumn} `;
  },
};

export default CompanyQueries;
