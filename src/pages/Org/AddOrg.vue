<template >
  <div class="content" >
    <div>
      <!-- <base-button block type="primary" class=" mb-3" @click="modals.modal3 = true">
            Default
        </base-button> -->
      <modal
        :show.sync="modals.modal3"
        body-classes="p-0"
        modal-classes="modal-dialog-centered modal-sm"
      >
        <card
          type="secondary"
          header-classes="bg-white pb-5"
          body-classes="px-lg-5 py-lg-5"
          class="border-0 mb-0"
        >
          <template>
            <div class="text-muted text-center mb-3">
              {{ $t("data.org") }}
            </div>
          </template>
          <template>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(submit)">
                <ValidationProvider
                  v-bind:name="$t('input.valid.orgname')"
                  rules="required"
                  v-slot="{ passed, failed, errors }"
                >
                  <base-input
                    required
                    v-bind:placeholder="$t('input.placeholder.orgname')"
                    class="mb-3"
                    v-model="orgname"
                    :error="errors[0]"
                    :class="[
                      { 'has-success': passed },
                      { 'has-danger': failed }
                    ]"
                  >
                  </base-input>
                </ValidationProvider>

                <ValidationProvider
                  v-bind:name="$t('input.placeholder.Url')"
                  rules="required"
                  v-slot="{ passed, failed, errors }"
                >
                  <base-input
                    required
                    v-bind:placeholder="$t('input.placeholder.Url')"
                    v-model="url1"
                    type="text"
                    :error="errors[0]"
                    :class="[
                      { 'has-success': passed },
                      { 'has-danger': failed }
                    ]"
                  >
                  </base-input>
                </ValidationProvider>
                <center>
                  <image-upload
                    @change="onImageChange"
                    select-text="Select Image"
                  />
                </center>

                <div class="text-center">
                  <base-button
                    type="primary"
                    native-type="submit"
                    class="my-4"
                    >{{ $t("submit.add_org") }}</base-button
                  >
                </div>
              </form>
            </ValidationObserver>
          </template>
        </card>
      </modal>
    </div>

    <div class="col-md-8 ml-auto mr-auto">
      <h2 class="text-center">{{ $t("data.org") }}</h2>
    </div>
    <br />
    <div class="row mt-5">
      <div class="col-12">
        <card card-body-classes="table-full-width">
          <div class="d-flex justify-content-between">
            <h4 slot="header" class="card-title">{{ $t("data.org") }}</h4>
            <base-button
              slot="header"
              type="primary"
              icon
              @click="modals.modal3 = true"
            >
              <i class="tim-icons icon-simple-add"></i>
            </base-button>
          </div>

          <div>
            <div
              class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </div>
            <el-table
              :data="queriedData"
              border
              style="width: 100%; border: 1px solid #EBEEF5;"
            >
              <!-- <el-table-column
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="$t('table.lable.entries()')"
              >
              </el-table-column> -->
              <!-- <el-table-column
               min-width="135"
                
                label="Logo"
              > -->
              <el-table-column label="Logo" min-width="50">
                <div
                  slot-scope="{ row }"
                  class="img-container"
                  style="height:50px; width:50px"
                >
                  <img :src="row.org_logo" alt="product image" />
                </div>
              </el-table-column>

              <el-table-column
                min-width="80"
                label="Org Name"
                prop="organisation_name"
              >
              </el-table-column>
              <el-table-column min-width="135" label="Url" prop="website_url">
              </el-table-column>
              <el-table-column :min-width="50" align="right" label="Actions">
                <div slot-scope="props">
                  <!-- <base-button
                    @click.native="handleLike(props.$index, props.row)"
                    class="like btn-link"
                    type="info"
                    size="sm"
                    icon
                  >
                 
                    <i class="tim-icons icon-heart-2"></i>
                  </base-button> -->
                  <base-button
                    @click.native="handleEdit(props.$index, props.row)"
                    class="edit btn-link"
                    type="warning"
                    size="sm"
                  >
                    Add User
                  </base-button>

                  <base-button
                    @click.native="handleEdit(props.$index, props.row)"
                    class="edit btn-link"
                    type="warning"
                    size="sm"
                    icon
                  >
                    <i class="tim-icons icon-pencil"></i>
                  </base-button>
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
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              v-model="pagination.currentPage"
              :per-page="pagination.perPage"
              :total="total"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </div></div
></template>
<script>
import { ImageUpload } from "src/components/index";
import {
  Table,
  TableColumn,
  Select,
  Option,
  Alert,
  DatePicker
} from "element-ui";
import { BasePagination } from "src/components";
import users from "./users";
import { Tag } from "element-ui";
import Fuse from "fuse.js";
import swal from "sweetalert2";
import { Modal } from "src/components";
import { extend } from "vee-validate";
import { required, numeric, regex, confirmed } from "vee-validate/dist/rules";
import axios from "axios";

extend("required", required);
extend("numeric", numeric);
extend("regex", regex);
extend("confirmed", confirmed);

export default {
  name: "tags-input",
  components: {
    Modal,
    ImageUpload,
    BasePagination,
    [Alert.name]: Alert,
    [DatePicker.name]: DatePicker,
    [Tag.name]: Tag,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }

      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
        console.log(highBound);
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
  data() {
    return {
       componentKey: 0,
      url: process.env.VUE_APP_ROOT_API,
      orgname: "",
      url1: "",
      tenant: [],
      framework: "",
      images: {
        regular: null
      },
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: "",
      propsToSearch: ["name", "email", "age"],
      tableColumns: [
        {
          prop: "name",
          label: "Name",
          minWidth: 200,
          sort: "sortable"
        },
        {
          prop: "salary",
          label: "Function",
          minWidth: 100
        },
        {
          prop: "age",
          label: "{{$t('table.lable.age')}}",
          minWidth: 150
        },
        {
          prop: "email",
          label: "{{$t('table.lable.email')}}",
          minWidth: 250
        },
        {
          prop: "email",
          label: "{{$t('table.lable.address')}}",
          minWidth: 200
        },
        {
          prop: "salary",
          label: "{{$t('table.lable.phone')}}",
          minWidth: 120
        }
      ],
      modals: {
        modal3: false
      },
      tableData: '',
      searchedData: [],
      searchedData1: null,
      fuseSearch: null,
      required: "",
      function1: "",
      number: "",
      equal: "",
      equalTo: "",
      member: "",
      address: "",
      ph_number: "",
      re: false
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
    this.tableData = response.data.reverse();




    //this.framework = response1.data.count.toString();

    // console.log(typeof this.tenant.toString());
  },

  methods: {
     forceRerender() {
       axios.get(this.url + "/org/api/tenant", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken")
      }
    }).then(response => {
         let data1 = response.data;
    console.log(data1);
    this.tableData = response.data.reverse();
        });

   
    },
    handleLike(index, row) {
      swal.fire({
        title: `You liked ${row.name}`,
        buttonsStyling: false,
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success btn-fill"
        }
      });
    },
    onImageChange(file) {
      this.images.regular = file;
      console.log(this.images);
    },
    async submit() {
      let formData = new FormData();

      formData.append("org_logo", this.images.regular);
      formData.append("organisation_name", this.orgname);
      formData.append("website_url", this.url1);
      axios
        .post(
          this.url + "/org/api/tenant/",
          formData,

          {
            headers: {
              "Content-type": "multipart/form-data",
              // 'Content-Disposition': 'attachment',
              // 'filename': 'file',

              Authorization: "Token " + localStorage.getItem("usertoken")
            }
          }
        )
        .then(response => {
          console.log(response);
          this.modals.modal3 = false;
            this.forceRerender();
        })
        .catch(error => {
          console.log(error.response);
          // this.msg = error.response.data.password[0];
          // this.showAlert1();
        });
    },

    filterTag(value, row) {
      return row.status === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

    handleEdit(index, row) {
      localStorage.setItem("userid", row.id);
      this.$router.push({ path: 'adduser' });

    },
    handleDelete(index, row) {
      swal
        .fire({
          title: "Are you sure?",
          text: `You won't be able to revert this!`,
          icon: "warning",
          showCancelButton: true,
          customClass: {
            confirmButton: "btn btn-success btn-fill",
            cancelButton: "btn btn-danger btn-fill"
          },
          confirmButtonText: "Yes, delete it!",
          buttonsStyling: false
        })
        .then(result => {
          if (result.value) {
            this.deleteRow(row);
            swal.fire({
              title: "Deleted!",
              text: `You deleted ${row.name}`,
              icon: "success",
              confirmButtonClass: "btn btn-success btn-fill",
              buttonsStyling: false
            });
          }
        });
    },
    deleteRow(row) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === row.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    }
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["name", "email"],
      threshold: 0.3
    });
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  }
};
</script>
<style>
.pagination-select,
.search-input {
  width: 200px;
}
.swal2-icon-content {
  font-size: inherit !important;
}
</style>
