<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="Blog"></lazy-car-banner>
    <!-- Sub Banner end -->
    <!-- Blog body start -->
    <div class="blog-body content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(item, index) in posts" :key="index">
            <div class="blog-1">
              <div class="blog-image">
                <img :src="item.images[0]" alt="blog-1" class="img-fluid bp" />
                <div class="date-box">
                  <span>{{ moment(item.createdAt).format('Do MMM') }}</span>
                </div>
                <div class="profile-user">
                  <img src="img/avatar/avatar-1.jpg" alt="user" />
                </div>
              </div>
              <div class="detail">
                <div class="post-meta clearfix">
                  <ul>
                    <li>
                      <strong><a href="/blog#">Admin</a></strong>
                    </li>
                    <li class="float-right">
                      <a href="/blog#"><i class="flaticon-comment"></i></a>17K
                    </li>
                    <li class="float-right">
                      <a href="/blog#"><i class="flaticon-calendar"></i></a>73k
                    </li>
                  </ul>
                </div>
                <h4>
                  <button class="font" @click="viewBlogDetails(item)">{{ item.header }}</button>
                </h4>
                <p class="truncate ..." v-html="item.description.substring(0, 100) + '...'"></p>
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
import moment from 'moment';

export default {
  layout: 'site',
  middleware: 'guest',
  computed: {
    ...mapGetters({
      posts: 'blog/getPosts',
    }),
  },

  data() {
    return {
      moment,
    };
  },

  methods: {
    viewBlogDetails(data) {
      this.setPost(data);

      this.$router.push({ path: '/blog-details' });
    },

    ...mapMutations({
      setPost: 'blog/setPost',
    }),

    ...mapActions({
      getPostsApi: 'blog/getPostsApi'
    }),
  },

  mounted() {
    this.$nextTick(() => {
      this.getPostsApi({query: {}})
    });
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
