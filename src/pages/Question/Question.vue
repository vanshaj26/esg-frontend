<template>
  <div class="content">
    <div class="col-md-12 ml-auto mr-auto">
      <h2 class="text-center">Questionnaire</h2>
    </div>

    <div class="col-md-12">
      <card>
        <template slot="header">
          <!-- <h5 class="card-category">Latest Upadte</h5> -->
          <div class="d-flex justify-content-between">
            <h4 slot="header" class="card-title" v-if="selects">
              {{ selects.simple }}
            </h4>
            <el-select
              class="select-primary"
              size="large"
              placeholder="Single Select"
              v-model="selects.simple"
            >
              <el-option
                v-for="option in countries"
                class="select-primary"
                :value="option.value"
                :label="option.label"
                :key="option.label"
              >
              </el-option>
            </el-select>
          </div>
        </template>

        <tabs type="primary">
          <tab-pane label="General Data">
            <div class="col-md-12">
              <card>
                <template slot="header">
                  <!-- <h5 class="card-category">Collapse Example</h5> -->
                  <h3 class="card-title">General Data</h3>
                </template>

                <collapse :multiple-active="true" :active-index="0">
                  <collapse-item title="Subcategory-1">
                    <div>
                      <ol>
                        <li>
                          <h4>
                            <b>which option best describes your job role?</b>
                          </h4>
                          <p style="text-muted">
                            <b> Description:</b>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae, cum pariatur unde reiciendis, vel
                            blanditiis reprehenderit, ad enim iusto eius
                            suscipit optio ipsa quasi molestiae aut ducimus
                            consequuntur facere! Iusto.
                          </p>
                          <br />
                          <base-input label="Comment">
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </base-input>
                        </li>
                      </ol>
                    </div>
                  </collapse-item>

                  <collapse-item title="Subcategory-2">
                    <!-- <div
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
                    </div> -->

                    <div>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                    <br />
                    <!-- <div
                      class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
                    >
                      <base-pagination
                        class="pagination-no-border"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="total"
                      >
                      </base-pagination>
                    </div> -->
                  </collapse-item>

                  <collapse-item title="Subcategory-3">
                    <div>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </collapse-item>
                </collapse>
              </card>
            </div>
          </tab-pane>

          <tab-pane label="Environmental">
            <!-- <add-general-data/> -->
          </tab-pane>

          <tab-pane label="Social">
            <!-- <add-general-data/> -->
          </tab-pane>

          <tab-pane label="Governance">
            <!-- <add-general-data/> -->
          </tab-pane>
        </tabs>
      </card>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option, Alert } from "element-ui";

import { BasePagination } from "src/components";
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

  data() {
    return {
      pagination: {
        // perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      countries: [
        { value: "GRI", label: "GRI" },
        { value: "SASP", label: "SASP" }
      ],

      selects: {
        simple: "",
        multiple: "ARS"
      }
    };
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
