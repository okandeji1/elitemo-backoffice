<template>
  <div>
    <!-- Sub banner start -->
    <lazy-car-banner title="Car List"></lazy-car-banner>
    <!-- Sub Banner end -->
    <!-- Featured car start -->
    <div class="featured-car content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <!-- Option bar start -->
            <div class="option-bar clearfix">
              <div class="row">
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="sorting-options2">
                    <!-- FIXME: pagination revisited -->
                    <h5>Showing 1-15 of 69 Listings</h5>
                  </div>
                </div>
              </div>
            </div>
            <!-- Car box 2 start -->
            <div class="car-box-2" v-for="(item, index) in cars" :key="index">
              <div class="row g-0">
                <div class="col-lg-5 col-md-5">
                  <div class="car-thumbnail">
                    <span class="car-img">
                      <div class="for">{{ item.type }}</div>
                      <img class="d-block w-100" :src="item.images[0]" alt="car" />
                    </span>
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 align-self-center">
                  <div class="detail">
                    <h1 class="title">
                      <button class="b-btn" @click="viewCarDetails(item)">{{ item.make }}</button>
                    </h1>
                    <ul class="custom-list">
                      <li><span>New Car</span> /</li>
                      <li><span>Automatic</span> /</li>
                      <li>
                        <span>Sports</span>
                      </li>
                    </ul>
                    <ul class="facilities-list clearfix">
                      <li><i class="flaticon-fuel"></i> {{ item.specifications.fuelType }}</li>
                      <li><i class="flaticon-way"></i> {{ item.specifications.speed }}</li>
                      <li><i class="flaticon-manual-transmission"></i> {{ item.specifications.transmission }}</li>
                      <li><i class="flaticon-car"></i> {{ item.brand }}</li>
                      <li><i class="flaticon-gear"></i> {{ item.specifications.gears }}</li>
                      <li><i class="flaticon-calendar-1"></i> {{ item.specifications.year }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Page navigation start -->
            <div class="pagination-box p-box-2 text-center">
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
          <div class="col-lg-4 col-md-12">
            <div class="sidebar-right">
              <!-- Advanced search start -->
              <div class="widget advanced-search2">
                <h3 class="sidebar-title">Search Cars</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <form>
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="brand">
                      <option>Brand</option>
                      <option>Any</option>
                      <option>New</option>
                      <option>Semi-New</option>
                      <option>Damaged</option>
                      <option>Used</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="location">
                      <option>Location</option>
                      <option>Lagos</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="year">
                      <option>Year</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2021</option>
                      <option>2020</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="category">
                      <option>Category</option>
                      <option>Luxury Car</option>
                      <option>Pickup Truck</option>
                      <option>Minivan</option>
                      <option>Truck</option>
                      <option>Sports Car</option>
                      <option>Wagon</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="transmission">
                      <option>Transmission</option>
                      <option>Automatic</option>
                      <option>Manual</option>
                      <option>Tiptronic</option>
                    </select>
                  </div>
                  
                  <a class="show-more-options" data-toggle="collapse" data-target="#options-content">
                    <i class="fa fa-plus-circle"></i> Other Features
                  </a>
                  <div id="options-content" class="collapse">
                    <h3 class="sidebar-title">Brands</h3>
                    <div class="s-border"></div>
                    <div class="m-border"></div>
                    <div class="checkbox checkbox-theme checkbox-circle">
                      <input id="checkbox2" type="checkbox" />
                      <label for="checkbox2"> Audi </label>
                    </div>
                    <div class="checkbox checkbox-theme checkbox-circle">
                      <input id="checkbox3" type="checkbox" />
                      <label for="checkbox3"> BMW </label>
                    </div>
                    <div class="checkbox checkbox-theme checkbox-circle">
                      <input id="checkbox4" type="checkbox" />
                      <label for="checkbox4"> Honda </label>
                    </div>
                    <div class="checkbox checkbox-theme checkbox-circle">
                      <input id="checkbox1" type="checkbox" />
                      <label for="checkbox1"> Lamborghini </label>
                    </div>
                    <div class="checkbox checkbox-theme checkbox-circle">
                      <input id="checkbox5" type="checkbox" />
                      <label for="checkbox5"> Toyota </label>
                    </div>
                    <br />
                  </div>
                  <div class="form-group mb-0">
                    <button class="search-button btn" disabled>Search</button>
                  </div>
                </form>
              </div>
              <!-- Recent posts start -->
              <div class="widget recent-posts">
                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <div class="d-flex mb-4 recent-posts-box" v-for="(item, index) in posts" :key="index">
                  <a href="#">
                    <img :src="item.images[0]" class="flex-shrink-0 me-3" alt="i" />
                  </a>
                  <div class="align-self-center">
                    <h5>
                      <span @click="viewBlogDetails(item)">{{ item.header }}</span>
                    </h5>
                    <div class="listing-post-meta">
                      Admin | <a href="#"><i class="fa fa-calendar"></i> {{ moment(item.createdAt).format('Do MMM') }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Posts By Category Start -->
              <div class="posts-by-category widget">
                <h3 class="sidebar-title">Category</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <!-- <ul class="list-unstyled list-cat">
                  <li>
                    <a href="#">Luxury <span>(45)</span></a>
                  </li>
                  <li>
                    <a href="#">Pickup Truck <span>(21)</span> </a>
                  </li>
                  <li>
                    <a href="#">Sports Car <span>(19)</span></a>
                  </li>
                  <li>
                    <a href="#">Automakers <span>(22) </span></a>
                  </li>
                  <li>
                    <a href="#">Wagon <span>(9) </span></a>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured car end -->
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
      cars: 'car/getCars',
    }),
  },

  data() {
    return {
      moment,
    };
  },

  methods: {
    viewCarDetails(data) {
      this.setCar(data);

      this.$router.push({ path: '/car-details' });
    },

    viewBlogDetails(data) {
      this.setPost(data);

      this.$router.push({ path: '/blog-details' });
    },

    ...mapMutations({
      setCar: 'car/setCar',
      setPost: 'blog/setPost',
    }),

    ...mapActions({
      getCarsApi: 'car/getCarsApi',
      getPostsApi: 'blog/getPostsApi',
    }),
  },

  mounted() {
    this.$nextTick(() => {
      this.getCarsApi({query: {}});
      this.getPostsApi({query: {limit: 10}})
    });
  },
};
</script>
<style scoped></style>
