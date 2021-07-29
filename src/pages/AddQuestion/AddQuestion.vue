<template>
  <card>
    <div slot="header" class="card-header-success">
      <div class="d-flex justify-content-between">
        <!-- <h5>{{selects.languages[this.i].organisation_name}}</h5> -->
      </div>
    </div>
    <br />
    <br />
    <blockquote class="blockquote mb-0">
        <div class="mb-5">
            <center>
                Add Question
            </center>
            <hr>
        </div>
        
      <form @submit.prevent="submit()">
        <div class="form-row">
          <!-- <div class="col-12 mb-5">
               <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                           placeholder="Name"
                  v-model="name"
                        ></textarea>
              </div> -->

          <div class="col-sm-12 col-md-3  mb-5">
            <el-select
              class="select-danger col-sm-12 col-md-9"
              placeholder="Framework"
              @change="orgf()"
              v-model="selects1.simple1"
            >
              <el-option
                v-for="option in selects1.framework"
                class="select-danger"
                :value="option.id"
                :label="option.name"
                :key="option.name"
              >
              </el-option>
            </el-select>
          </div>

          <div class="col-sm-12 col-md-3  mb-5">
            <el-select
              class="select-danger col-sm-12 col-md-9"
              placeholder="Category"
              @change="orgc()"
              v-model="selects2.simple2"
            >
              <el-option
                v-for="option in selects2.category"
                class="select-danger"
                :value="option.id"
                :label="option.name"
                :key="option.name"
              >
              </el-option>
            </el-select>
          </div>

          <div class="col-sm-12 col-md-3  mb-5">
            <el-select
              class="select-danger col-sm-12 col-md-9"
              placeholder="Sub-Category"
              @change="orgs()"
              v-model="selects3.simple3"
            >
              <el-option
                v-for="option in selects3.subcategory"
                class="select-danger"
                :value="option.id"
                :label="option.name"
                :key="option.name"
              >
              </el-option>
            </el-select>
          </div>

          <div class="col-sm-12 col-md-3  mb-5">
            <el-select
              class="select-danger col-sm-12 col-md-9"
              style="border: 1px solid balck"
              placeholder="Language"
              @change="orgl()"
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

          <div class="col-sm-12 col-md-12  mb-5 ">
            <el-input
             class="select-danger col-sm-12"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6 }"
              placeholder="Add Question"
              v-model="question"
            >
            </el-input>
          </div>

          <div class="col-sm-12 col-md-6  mb-5">
            <base-input
             class="select-danger col-sm-12"
              type="text"
             
              placeholder="Add Description"
              v-model="desc"
            >
            </base-input>
          </div>
          <div class="col-sm-12 col-md-6  mb-5">
            <base-input
             class="select-danger col-sm-12"
              type="text"
             
              placeholder="Unit"
              v-model="unit"
            >
            </base-input>
          </div>

          <div class="col">
            <center>
              <base-button type="primary" native-type="submit">Add</base-button>
            </center>
          </div>
        </div>
      </form>
      <!-- <el-table
        class="table-striped"
        :data="
          tableData.filter(
            data =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
      >
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="question" label="Question"> </el-table-column>
        <el-table-column prop="description" label="Description">
        </el-table-column>
        <el-table-column prop="unit" label="Unit"> </el-table-column>
        
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
      </el-table> -->
    </blockquote>
  </card>
</template>

<script>
import { TabPane, Tabs } from "element-ui";
import { Table, TableColumn, Select, Option } from "element-ui";
import axios from "axios";
import Swal from 'sweetalert2';
// import { TabPane, Tabs} from "src/components";
export default {
  components: {
    TabPane,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    Tabs,
    Swal
  },
  data() {
    return {
      activeName: "category",
      url: process.env.VUE_APP_ROOT_API,
      question:"",
      fram:"",
      cat:"",
      sub:'',
      lang:"",
      desc: '',
      unit:"",
      selects: {
        simple: "",
        languages: []
      },

      selects1: {
        simple1: "",
        framework: []
      },

      selects2: {
        simple2: "",
        category: []
      },
      selects3: {
        simple3: "",
        subcategory: []
      },
      name: null,
      description: null,
      tenant: "",
      i: "",
      tableData: [],
      search: ""
    };
  },

  async created() {
    const response = await axios.get(this.url + "/lang/api/language/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    //  let data1 = response.data.results;
    // console.log(data1);
    this.selects.languages = response.data.results;

    const response2 = await axios.get(this.url + "/frame/api/framework/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    //  let data1 = response2.data.results;
    // console.log(data1);

    this.selects1.framework = response2.data.results;

    const response3 = await axios.get(this.url + "/frame/api/category/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    this.selects2.category = response3.data.results;

    const response4 = await axios.get(this.url + "/frame/api/sub_category/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    //  let data1 = response4.data.results;
    //  console.log(data1);

    this.selects3.subcategory = response4.data.results;

    const response1 = await axios.get(this.url + "/frame/api/ques/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    });

    this.tableData = response1.data.results;
    console.log(this.tableData);
  },

  methods: {


    showSwal () {
          swal.fire({
           title: `Added Succesful`,
           buttonsStyling: false,
           customClass: {
             confirmButton: 'btn btn-success btn-fill'
           }
         })
       },
   orgc() {
      this.cat = this.selects2.simple2.toString();
      // this.lang = this.tenant.toString();
      // alert(this.cat);
    },

 orgf() {
      this.fram = this.selects1.simple1.toString();
      // this.lang = this.tenant.toString();
      // alert(this.fram);
    },

     orgs() {
      this.sub = this.selects3.simple3.toString();
      // this.lang = this.tenant.toString();
      // alert(this.sub);
    },
    orgl() {
      this.lang = this.selects.simple.toString();
      // this.lang = this.tenant.toString();
      // alert(this.lang);
    },

    org1() {
      if (this.activeName == "category") {
        axios
          .get(this.url + "/frame/api/category/", {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          })
          .then(response => {
            console.log(response);
            this.tableData = response.data.results;
          });
      } else if (this.activeName == "framework") {
        axios
          .get(this.url + "/frame/api/framework/", {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          })
          .then(response => {
            console.log(response);
            this.tableData = response.data.results;
          });
      } else {
        axios
          .get(this.url + "/frame/api/sub_category/", {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          })
          .then(response => {
            console.log(response);
            this.tableData = response.data.results;
          });
      }
    },

    async submit() {
      axios
        .post(
          this.url + "/frame/api/map_new_ques/?frame="+this.fram+"&cat="+this.cat+"&sub_cat="+this.sub,
          {
            question: this.question,
            description: this.desc,
            unit: this.unit,
            language: this.lang
          },
          {
            headers: {
              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }
        )
        .then(response => {
          console.log(response);
          this.question= "",
          this.desc= "",
          this.unit= "",
          this.$notify({type: 'success', message: 'Successful'})
          
        });
    }
  }
};
</script>

<style scoped>
.el-tabs__item {
  color: #2caa37 !important;
}

.el-textarea__inner {
    border:1px solid black !important;
}
</style>
