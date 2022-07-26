<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="Blog"></lazy-car-banner>
    <!-- Sub Banner end -->
    <!-- Blog body start -->
    <div class="blog-body content-area-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <!-- Blog 1 start -->
            <div class="blog-1 blog-big mb-50">
              <div class="blog-photo">
                <img :src="blog.img" alt="blog-img" class="img-fluid w-100" />
              </div>
              <div class="detail">
                <h3>
                  <a href="#">{{blog.title}}</a>
                </h3>
                <p>{{blog.description}}</p>
                <br />
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-tags">
                      <span>Tags</span>
                      <a href="##">Auto</a>
                      <a href="##">Theme</a>
                      <a href="##">Buy Car</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-social-list">
                      <span>Share</span>
                      <a href="##" class="facebook-bg">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="##" class="twitter-bg">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="##" class="google-bg">
                        <i class="fa fa-google"></i>
                      </a>
                      <a href="##" class="linkedin-bg">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="##" class="pinterest-bg">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="sidebar-right">
              <!-- Recent posts start -->
              <div class="widget recent-posts">
                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <div class="d-flex mb-4 recent-posts-box" v-for="(item, index) in blogs" :key="index">
                  <a href="#">
                    <img :src="item.img" class="flex-shrink-0 me-3" alt="photo" />
                  </a>
                  <div class="align-self-center">
                    <h5>
                      <span @click="viewBlogDetails(item)">{{item.title}}</span>
                    </h5>
                    <div class="listing-post-meta">
                      $345,00 | <a href="#"><i class="fa fa-calendar"></i> {{item.date}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Posts By Category Start -->
              <div class="posts-by-category widget">
                <h3 class="sidebar-title">Category</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul class="list-unstyled list-cat">
                  <li>
                    <a href="##">Luxury <span>(45)</span></a>
                  </li>
                  <li>
                    <a href="##">Pickup Truck <span>(21)</span> </a>
                  </li>
                  <li>
                    <a href="##">Sports Car <span>(19)</span></a>
                  </li>
                  <li>
                    <a href="##">Automakers <span>(22) </span></a>
                  </li>
                  <li>
                    <a href="##">Wagon <span>(9) </span></a>
                  </li>
                </ul>
              </div>
              <!-- Tags box Start -->
              <div class="widget tags-box widget-3">
                <h3 class="sidebar-title">Tags</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <ul class="tags">
                  <li><a href="##">Car Dealer</a></li>
                  <li><a href="##">Auto</a></li>
                  <li><a href="##">Car Website</a></li>
                  <li><a href="##">Automobile</a></li>
                  <li><a href="##">Theme</a></li>
                  <li><a href="##">Events</a></li>
                  <li><a href="##">Car Template</a></li>
                  <li><a href="##">Buy Car</a></li>
                </ul>
              </div>
            </div>
          </div>
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
        blog: 'blog/getBlog',
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
<style scoped></style>
