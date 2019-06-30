<template>
  <div>
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="活动名称">
        <el-input v-model="searchMap.name" placeholder="活动名称"></el-input>
      </el-form-item>
      <el-form-item label="活动日期">
        <el-date-picker type="date" placeholder="选择开始日期" v-model="searchMap.starttime"></el-date-picker>
      </el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="addFlag = true">新增</el-button>
    </el-form>

    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="活动ID" width="180"></el-table-column>
      <el-table-column prop="name" label="活动名称" width="180"></el-table-column>
      <el-table-column prop="sponsor" label="主办方" width="180"></el-table-column>
      <el-table-column prop="address" label="活动地址" width="180"></el-table-column>
      <el-table-column prop="starttime" label="开始日期" width="180"></el-table-column>
      <el-table-column prop="endtime" label="结束日期" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="handleEdit(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="search"
      @current-change="search"
      :current-page.sync="page"
      :page-sizes="[5, 10, 15]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <div>
      <el-dialog title="活动添加" :visible.sync="addFlag" width="30%" center>
        <span slot="footer" class="dialog-footer">
          <div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="名称">
                <el-input v-model="pojo.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="pojo.region"></el-input>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input v-model="pojo.type"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-button @click="addFlag = false">取 消</el-button>
          <el-button type="primary" @click="addFlag = false;addGathering()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import gatheringApi from "@/api/gathering";
export default {
  data() {
    return {
      list: [],
      total: 0, //总记录数
      page: 1, //当前页
      size: 5, //每页大小
      searchMap: {}, //查询表单绑定变量
      addFlag: false,
      pojo: {}
    };
  },
  created() {
    this.search();
  },
  methods: {
    fetchData() {
      gatheringApi.getList().then(response => {
        this.list = response.data;
      });
    },
    search() {
      gatheringApi
        .search(this.page, this.size, this.searchMap)
        .then(response => {
          this.list = response.data.rows;
          this.total = response.data.total;
        });
    },
    addGathering() {
      gatheringApi.addGathering(this.pojo).then(response => {});
    }
  }
};
</script>

<style>
</style>