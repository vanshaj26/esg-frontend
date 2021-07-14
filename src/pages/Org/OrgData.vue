<template>
 

      <el-table :data="tableData" height="250" style="width: 100%">
         <el-table-column label="Logo">
        <div  class="img-container" style="height:50px; width:50px">
          <img src="https://listcarbrands.com/wp-content/uploads/2017/10/Tata-Motors-Logo-768x570.png" alt="product image" />
        </div>
      </el-table-column>
        <!-- <el-table-column prop="date" label="Date" width="180">
        </el-table-column> -->
        <el-table-column prop="name" label="Name">
        </el-table-column>
        <el-table-column prop="address" label="Url"> </el-table-column>
      </el-table>
   
</template>

<script>
import { Table, TableColumn, Select, Option, Alert } from "element-ui";

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
};
</script>
