const CompanyQueries = {
  GetCompaniesTable(
    ordercolumn: string,
    lastvalue: string | number,
    searchvalue: string,
  ): string {
    let query = 'select * from company ';
    query += this.GetCompaniesTableWhereClause(
      ordercolumn,
      lastvalue,
      searchvalue,
    );
    query += this.GetCompaniesTableOrderByClause(ordercolumn);
    return query;
  },

  GetCompaniesTableWhereClause(
    ordercolumn: string,
    lastvalue: string | number,
    searchvalue: string,
  ): string {
    let whereClause = 'where true is true ';
    if (lastvalue) whereClause += `and ${ordercolumn} < ${lastvalue} `;
    if (searchvalue) whereClause += `and name like '%${searchvalue}%'`;
    return whereClause;
  },

  GetCompaniesTableOrderByClause(ordercolumn: string): string {
    return `order by ${ordercolumn} `;
  },
};

export default CompanyQueries;
