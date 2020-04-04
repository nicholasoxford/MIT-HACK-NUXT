<template>
   <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
          <el-table-column label="IMAGE" width="200px">
        <template slot-scope="scope">
fdsds
        </template>

          </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          productID: '2016-05-03',
          productImage: 'Tom',
          availability : 'No. 189, Grove St, Los Angeles',

        }, {
          ProductID: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          ProductID: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          ProductID: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>

<style>

</style>