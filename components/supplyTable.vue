<template>
<div style="width: 100%; content-align: center">
    <el-dialog
  :visible.sync="showDialogue"
  :title="shopData.productName"
  width="30%"
  center
 >
  
<el-form  :model="purchaseOrder"  ref="form1"  class="ruleForm" label-position="top" align="center" >
<el-form-item label="How many do you need?" prop="number">
<el-input placeholder="Please input" type="number" v-model="purchaseOrder.number"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="this.showDialogue = false">Cancel</el-button>
    <el-button type="primary" @click="checkout()">Confirm</el-button>
  </span>
</el-dialog>
   <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="productName"
      label="Item"
      width="180">
    </el-table-column>
          <el-table-column width="200px">
        <template slot-scope="scope">
<el-image class="c-image" fit="cover" :src="scope.row.productImage"></el-image>
        </template>
          </el-table-column>
    <el-table-column
      prop="availability"
      label="Availability"
      width="180"
>
    </el-table-column>
    <el-table-column
      prop="cost"
      label="Cost">
    </el-table-column>
        <el-table-column
      label="Actions">
       <template slot-scope="scope">
     <el-button type="success" @click="openShop(scope.row)" round>Inquire</el-button>
       </template>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          productID: 'N95Mask_1',
          productName: 'N95 Mask',
          productImage: 'https://mit-hackathon-images.s3.amazonaws.com/mask.png',
          availability : 'Immediate',
          cost: '$500 USD',
          location: '33.7490° N, 84.3880° W',
          metadata: {
              something: 'if needed',
              moreStuff: 'if needed'
          }
        },
        {
          productID: 'Glove_1',
          productName: 'Gloves',
          productImage: 'https://mit-hackathon-images.s3.amazonaws.com/glove.png',
          availability : '2 days',
          cost: '$200 USD',
          location: '33.7490° N, 84.3880° W',
          metadata: {
              something: 'if needed',
              moreStuff: 'if needed'
          }
        }, 
        {
          productID: 'Faceshield_1',
          productName: 'Faceshield',
          productImage: 'https://mit-hackathon-images.s3.amazonaws.com/face.png',
          availability : '5 days',
          cost: '$1500 USD',
          location: '33.7490° N, 84.3880° W',
          metadata: {
              something: 'if needed',
              moreStuff: 'if needed'
          }
        },
        {
          productID: 'Gown_1',
          productName: 'Gown',
          productImage: 'https://mit-hackathon-images.s3.amazonaws.com/gown.jpg',
          availability : 'Immediate',
          cost: '$500 USD',
          location: '33.7490° N, 84.3880° W',
          metadata: {
              something: 'if needed',
              moreStuff: 'if needed'
          }
        }
    ],
    shopData: [ {
          productID: '',
          productName: '',
          productImage: '',
          availability : '',
          cost: '',
          location: '',
          metadata: {
              something: '',
              moreStuff: ''
          }
        }],
        purchaseOrder: {
          number: 0
        },
    showDialogue: false
      }
    },
    methods: {
      openShop(scope) {
        this.showDialogue = true
        this.shopData = scope
        console.log(this.shopData)
      }
    },
    moutned: {

    }
  }
</script>

<style>
.c-image {
  padding: 5px;
}
</style>