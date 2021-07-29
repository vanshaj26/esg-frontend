<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Category" name="category">
      <card>
        <div slot="header" class="card-header-success">
          <div class="d-flex justify-content-between">
            <!-- <h5>{{selects.languages[this.i].organisation_name}}</h5> -->

           
          </div>
        </div>
        <br />
        <br />
        <blockquote class="blockquote mb-0">
          <form @submit.prevent="submit()">
            <div class="form-row">
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Description"
                  v-model="description"
                />
              </div>
              <div class="col">
                <el-select
            class="select-danger"
            placeholder="Select Language"
            @change="org()"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.languages"
              class="select-danger"
              :value="option.id"
              :label="option.language_name"
              :key="option.organisation_name"
            >
            </el-option>
          </el-select>
              </div>
              <div class="col">
                <center>
                  <base-button type="primary" native-type="submit"
                    >Add</base-button
                  >
                </center>
              </div>
            </div>
          </form>
          <el-table
            class="table-striped"
            :data="
              tableData.filter(
                data =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
          >
            <el-table-column type="index"> </el-table-column>
            <el-table-column prop="name" label="Name">
            </el-table-column>
            <el-table-column prop="description" label="Description"> </el-table-column>
            <!-- <el-table-column prop="email" label="Email"> </el-table-column> -->
            <el-table-column :min-width="50" align="right" label="Actions">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"
                />
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
    </el-tab-pane>
    <el-tab-pane label="FrameWork" name="framework">
        
        <card>
        <div slot="header" class="card-header-success">
          <div class="d-flex justify-content-between">
            <!-- <h5>{{selects.languages[this.i].organisation_name}}</h5> -->

           
          </div>
        </div>
        <br />
        <br />
        <blockquote class="blockquote mb-0">
          <form @submit.prevent="submit()">
            <div class="form-row">
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Description"
                  v-model="description"
                />
              </div>
              <div class="col">
                <el-select
            class="select-danger"
            placeholder="Select Language"
            @change="org()"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.languages"
              class="select-danger"
              :value="option.id"
              :label="option.language_name"
              :key="option.organisation_name"
            >
            </el-option>
          </el-select>
              </div>
              <div class="col">
                <center>
                  <base-button type="primary" native-type="submit"
                    >Add</base-button
                  >
                </center>
              </div>
            </div>
          </form>
          <el-table
            class="table-striped"
            :data="
              tableData.filter(
                data =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
          >
            <el-table-column type="index"> </el-table-column>
            <el-table-column prop="name" label="Name">
            </el-table-column>
            <el-table-column prop="description" label="Description"> </el-table-column>
            <!-- <el-table-column prop="email" label="Email"> </el-table-column> -->
            <el-table-column :min-width="50" align="right" label="Actions">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"
                />
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
    </el-tab-pane>
    <el-tab-pane label="Sub-Category" name="sub_category">
        <card>
        <div slot="header" class="card-header-success">
          <div class="d-flex justify-content-between">
            <!-- <h5>{{selects.languages[this.i].organisation_name}}</h5> -->

           
          </div>
        </div>
        <br />
        <br />
        <blockquote class="blockquote mb-0">
          <form @submit.prevent="submit()">
            <div class="form-row">
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="col">
                <base-input
                  type="text"
                  placeholder="Description"
                  v-model="description"
                />
              </div>
              <div class="col">
                <el-select
            class="select-danger"
            placeholder="Select Language"
            @change="org()"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.languages"
              class="select-danger"
              :value="option.id"
              :label="option.language_name"
              :key="option.organisation_name"
            >
            </el-option>
          </el-select>
              </div>
              <div class="col">
                <center>
                  <base-button type="primary" native-type="submit"
                    >Add</base-button
                  >
                </center>
              </div>
            </div>
          </form>
          <el-table
            class="table-striped"
            :data="
              tableData.filter(
                data =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
          >
            <el-table-column type="index"> </el-table-column>
            <el-table-column prop="name" label="Name">
            </el-table-column>
            <el-table-column prop="description" label="Description"> </el-table-column>
            <!-- <el-table-column prop="email" label="Email"> </el-table-column> -->
            <el-table-column :min-width="50" align="right" label="Actions">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"
                />
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
    </el-tab-pane>
    <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
  </el-tabs>
</template>

<script>
import { TabPane, Tabs } from "element-ui";
import { Table, TableColumn, Select, Option } from "element-ui";
import axios from "axios";
// import { TabPane, Tabs} from "src/components";
export default {
  components: {
    TabPane,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    Tabs
  },
  data() {
    return {
      activeName: "category",
       url: process.env.VUE_APP_ROOT_API,
      selects: {
        simple: "",
        languages: []
      },
      name: null,
      description: null,
      tenant:'',
      i: "",
    tableData: [],
    search: '',
      
    };
  },

  async created() {
    const response = await axios.get(this.url + "/lang/api/language/", {    
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

 if(this.activeName == "category"){
const response1 = await axios.get(this.url + "/frame/api/category/", {    
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    this.tableData = response1.data.results;
    console.log(this.tableData)
}
    

    let data1 = response.data.results;
    console.log(data1);
    this.selects.languages = response.data.results;
    


  },

  methods: {
    handleClick(tab, event) {
    
      if(this.activeName == "category"){
          axios
        .get(
          this.url + "/frame/api/category/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      }else if (this.activeName == "framework") {
           axios
        .get(
          this.url + "/frame/api/framework/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      } else{
            axios
        .get(
          this.url + "/frame/api/sub_category/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      }
    },

     org() {
        this.tenant= this.selects.simple;
        this.tenant = this.tenant.toString();
    },



    org1() {
      

      if(this.activeName == "category"){
          axios
        .get(
          this.url + "/frame/api/category/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      }else if (this.activeName == "framework") {
           axios
        .get(
          this.url + "/frame/api/framework/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      } else{
            axios
        .get(
          this.url + "/frame/api/sub_category/",
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.tableData = response.data.results
        })
      }
         


    },

     async submit() {
          axios
        .post(
          this.url + "/frame/api/cate/",{
              name: this.name,
              description: this.description,
              type: this.activeName,
              language: this.tenant
          },
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }).then(response => {
          console.log(response);
          this.org1();
          this.name = '',
          this.description = ''
         

        })
        


     }
  }
};
</script>

<style scoped>
.el-tabs__item {
  color: #2caa37 !important;
}
</style>
