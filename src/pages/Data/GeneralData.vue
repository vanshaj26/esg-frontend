<template>
  <div class="content">
    

    <div class="col-md-12">
              <card card-body-classes="table-full-width">
                <!-- <h4 slot="header" class="card-title">Data Status</h4> -->
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
                    <el-table-column
                      min-width="150"
                      label="Status"
                      property="status"
                      :filters="[
                        { text: 'Ok', value: 'ok' },
                        { text: 'No data', value: 'nodata' }
                      ]"
                      :filter-method="filterTag"
                      filter-placement="bottom-end"
                    >
                      <template slot-scope="scope">
                        <el-tag
                          :type="
                            scope.row.status === 'ok' ? 'primary' : 'success'
                          "
                          disable-transitions
                          >{{ scope.row.status }}</el-tag
                        >
                      </template>
                      >
                    </el-table-column>

                    <el-table-column
                      v-for="column in tableColumns"
                      :key="column.label"
                      :min-width="column.minWidth"
                      :prop="column.prop"
                      :label="column.label"
                    >
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
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option, Alert } from "element-ui";
import { BasePagination } from "src/components";
import users from "./users";
import { Tag } from "element-ui";
import Fuse from "fuse.js";
import swal from "sweetalert2";
import { TabPane, Tabs, Collapse, CollapseItem } from "src/components";

export default {
  name: "tags-input",
  components: {
    BasePagination,
    [Tag.name]: Tag,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    TabPane,
    Tabs,
    Collapse,
    CollapseItem
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
          label: "Status",
          minWidth: 200,
          sort: "sortable"
        },
        {
          prop: "email",
          label: "Datapoint",
          minWidth: 250
        },
        {
          prop: "age",
          label: "Description",
          minWidth: 100
        },
        {
          prop: "salary",
          label: "Value",
          minWidth: 120
        },
        {
          prop: "salary",
          label: "Unit",
          minWidth: 120
        },
        {
          prop: "salary",
          label: "comment",
          minWidth: 120
        }
      ],
      tableData: users,
      searchedData: [],
      searchedData1: null,
      fuseSearch: null
    };
  },
  methods: {
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

    filterTag(value, row) {
      return row.status === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

    handleEdit(index, row) {
      swal.fire({
        title: `You want to edit ${row.name}`,
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-info btn-fill"
        }
      });
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
