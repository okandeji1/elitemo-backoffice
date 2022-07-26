<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="Blog"></lazy-car-banner>
    <!-- Sub Banner end -->
    <!-- Blog body start -->
    <div class="blog-body content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(item, index) in blogs" :key="index">
            <div class="blog-1">
              <div class="blog-image">
                <img :src="item.img" alt="blog-1" class="img-fluid bp" />
                <div class="date-box">
                  <span>{{ item.date }}</span>
                </div>
                <div class="profile-user">
                  <img src="img/avatar/avatar-1.jpg" alt="user" />
                </div>
              </div>
              <div class="detail">
                <div class="post-meta clearfix">
                  <ul>
                    <li>
                      <strong><a href="#">Maria Blank</a></strong>
                    </li>
                    <li class="float-right">
                      <a href="#"><i class="flaticon-comment"></i></a>17K
                    </li>
                    <li class="float-right">
                      <a href="#"><i class="flaticon-calendar"></i></a>73k
                    </li>
                  </ul>
                </div>
                <h4>
                  <button class="font" @click="viewBlogDetails(item)">{{ item.title }}</button>
                </h4>
                <p class="truncate ...">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Page navigation start -->
        <!-- FIXME: work on pagination -->
        <div class="pagination-box hidden-mb-45 text-center">
          <nav aria-label="Page navigation example">
            <a-pagination :total="50" show-less-items />
            <!-- <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#"><i class="fa fa-angle-left"></i></a>
              </li>
              <li class="page-item"><a class="page-link active" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#"><i class="fa fa-angle-right"></i></a>
              </li>
            </ul> -->
          </nav>
        </div>
      </div>
    </div>
    <!-- Blog body end -->
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  layout: 'site',
  middleware: 'guest',
  computed: {
    ...mapGetters({
      blogs: 'blog/getBlogs',
    }),
  },

  data() {
    return {};
  },

  methods: {
    viewBlogDetails(data) {
      this.setBlog(data);

      this.$router.push({ path: '/blog-details' });
    },

    ...mapMutations({
      setBlog: 'blog/setBlog',
    }),

    ...mapActions({}),
  },

  mounted() {
    this.$nextTick(() => {});
  },
};
</script>
<style scoped>
.font {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #ffb400;
}
</style>
