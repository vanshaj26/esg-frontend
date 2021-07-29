<template>
  <card>
    <div slot="header" class="card-header-success">
      <div class="d-flex justify-content-between">
        <!-- <h5>{{selects.languages[this.i].organisation_name}}</h5> -->

        <template>
          <el-select
            class="select-danger"
            placeholder="Single Select"
            @change="org()"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.languages"
              class="select-danger"
              :value="option.id"
              :label="option.organisation_name"
              :key="option.organisation_name"
            >
            </el-option>
          </el-select>
        </template>
      </div>
    </div>
    <br />
    <br />
    <blockquote class="blockquote mb-0">
         <form @submit.prevent="submit()">
      <div class="form-row">
        <div class="col">
          <base-input type="text" placeholder="First name" v-model="f_name" />
        </div>
        <div class="col">
          <base-input type="text" placeholder="Last name"  v-model="l_name" />
        </div>
        <div class="col">
          <base-input type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="col">
            <center>
                <base-button
                    type="primary"
                    native-type="submit"
                    
                    
                    >Add</base-button
                  >
            </center>
          
        </div>

      </div>
    </form>
      <el-table class="table-striped" :data="tableData.filter(data => !search || data.f_name.toLowerCase().includes(search.toLowerCase()))">
         
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="f_name" label="First Name"> </el-table-column>
        <el-table-column prop="l_name" label="Last Name"> </el-table-column>
        <el-table-column prop="email" label="Email"> </el-table-column>
        <el-table-column :min-width="50" align="right" label="Actions">
             <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
          <div slot-scope="props">
          
            <base-button
              @click.native="handleDelete(props.$index, props.row)"
              class="remove btn-link"
              type="danger"
              size="sm"
              icon
            >
              <i class="tim-icons icon-simple-remove"></i>
            </base-button>
          </div>
        </el-table-column>
      </el-table>
    </blockquote>
  </card>
</template>

<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import axios from "axios";

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      url: process.env.VUE_APP_ROOT_API,
      selects: {
        simple: "",
        languages: []
      },
      f_name: null,
      l_name: null,
      email:null,
      tenant:'',
      i: "",
    tableData: [],
    search: '',
    };
  },

  async created() {
    const response = await axios.get(this.url + "/org/api/tenant", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    let data1 = response.data;
    console.log(data1);
    this.selects.languages = response.data;
  },

  methods: {
    org() {
        this.tenant= this.selects.simple;
        this.tenant = this.tenant.toString();
       

         axios
        .get(
          this.url + "/org/api/user/"+ this.selects.simple +"/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data
        })


    },

    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
     async submit() {
          axios
        .post(
          this.url + "/auth/api/register/",{
              email: this.email,
              f_name: this.f_name,
              l_name: this.l_name,
              tenant: this.tenant
          },
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.org();
          this.email = '',
          this.f_name = '',
          this.l_name=''

        })
        


     }
  }
};
</script>

<style scoped>
.btn, .navbar .navbar-nav > a.btn {
    margin: 0 !important;
}
</style>
