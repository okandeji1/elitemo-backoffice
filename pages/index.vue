<template>
  <div>
    <!-- Banner start -->
    <div class="banner" id="banner">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner banner-slider-inner">
          <div class="carousel-item active item-bg">
            <img class="d-block w-100 h-100" src="img/banner/img-6.jpg" alt="banner" />
            <div class="carousel-content prl-30 container banner-info-2 bi-2 text-start">
              <div class="typing">
                <h2>Find your Dream Car</h2>
              </div>
              <p>Our job is to help you buy a car that is a quality guaranteed.</p>
              <a href="#" class="btn-8">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
          <div class="carousel-item item-bg">
            <img class="d-block w-100 h-100" src="img/banner/img-4.jpg" alt="banner" />
            <div class="carousel-content prl-30 container banner-info-2 bi-2 text-start">
              <div class="typing">
                <h2>Welcome to Elitemo</h2>
              </div>
              <p>Our job is to help you buy a car that is quality guaranteed.</p>
              <a href="#" class="btn-8">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
          <div class="carousel-item item-bg">
            <img class="d-block w-100 h-100" src="img/banner/img-5.jpg" alt="banner" />
            <div class="carousel-content prl-30 container banner-info-2 bi-2 text-start">
              <div class="typing">
                <h2>Best place for sell car!</h2>
              </div>
              <p>Our job is to help you buy a car that is quality guaranteed.</p>
              <a href="#" class="btn-8">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Banner end -->

    <!-- Search box 2 start -->
    <div class="search-box-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inline-search-area">
              <div class="row row-3">
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <select class="selectpicker search-fields" name="select-brand">
                    <option>Select Brand</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Nissan</option>
                  </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <select class="selectpicker search-fields" name="select-make">
                    <option>Select Make</option>
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Lamborghini</option>
                    <option>Sports Car</option>
                  </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <select class="selectpicker search-fields" name="select-location">
                    <option>Select Location</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <select class="selectpicker search-fields" name="select-year">
                    <option>Select Year</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2021</option>
                  </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <select class="selectpicker search-fields" name="select-type">
                    <option>Select Type Of Car</option>
                    <option>New Car</option>
                    <option>Used Car</option>
                  </select>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                  <button class="btn white-btn btn-search w-100"><i class="fa fa-search"></i><strong>Find</strong></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Search box 2 end -->

    <!-- Featured car start -->
    <div class="featured-car content-area-21">
      <div class="container">
        <!-- Main title -->
        <div class="section-header d-flex">
          <h2 data-title="Types of car">Featured Car</h2>
        </div>
        <div class="row" v-if="featuredCars.length > 0">
          <div class="col-lg-4 col-md-6" v-for="(item, index) in featuredCars" :key="index">
            <div class="car-box-3">
              <div class="car-thumbnail">
                <a href="#" class="car-img">
                  <div class="for">{{ item.type }}</div>
                  <img class="d-block w-100" :src="item.images[0]" alt="car" />
                </a>
                <div class="carbox-overlap-wrapper">
                  <div class="overlap-box">
                    <div class="overlap-btns-area">
                      <a class="overlap-btn" data-bs-toggle="modal" data-bs-target="#carOverviewModal">
                        <i class="fa fa-eye-slash" @click="(e) => carModal(item)"></i>
                      </a>
                      <a class="overlap-btn wishlist-btn">
                        <i class="fa fa-heart-o"></i>
                      </a>
                      <a class="overlap-btn compare-btn">
                        <i class="fa fa-balance-scale"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="detail">
                <h1 class="title">
                  <button class="b-btn" @click="viewCarDetails(item)">{{ item.make }}</button>
                </h1>
                <ul class="custom-list">
                  <li><a href="#">New Car</a> /</li>
                  <li><a href="#">Automatic</a> /</li>
                  <li>
                    <a href="#">Sports</a>
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
              <div class="footer clearfix">
                <div class="pull-left ratings">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <span>(65 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured car end -->

    <!-- Service section start -->
    <div class="service-section-3 content-area">
      <div class="container">
        <!-- Main title -->
        <div class="main-title-2 text-center">
          <h1>We Are <span>The Best</span></h1>
          <div class="title-border">
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="service-info-3">
              <div class="number">1</div>
              <div class="icon">
                <i class="flaticon-shield"></i>
              </div>
              <div class="detail h-48">
                <h5><a href="#">Excellent quality and Vehicle reliability</a></h5>
                <p>Elitemo cars are strictly inspected for qualities. No mechanical faults for your peace of mind.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="service-info-3">
              <div class="number">2</div>
              <div class="icon">
                <i class="flaticon-deal"></i>
              </div>
              <div class="detail h-48">
                <h5><a href="#">Awesome Customer Experience</a></h5>
                <p>We are committed to providing you with an amazing experience for every moment.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="service-info-3">
              <div class="number">3</div>
              <div class="icon">
                <i class="flaticon-money"></i>
              </div>
              <div class="detail h-48">
                <h5><a href="#">Our Vision</a></h5>
                <p>To be a leading auto company providing gold standard customer services in every market we represent.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="service-info-3">
              <div class="number">4</div>
              <div class="icon">
                <i class="flaticon-support-2"></i>
              </div>
              <div class="detail h-48">
                <h5><a href="#">Free Support</a></h5>
                <p>We are available for further enquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Service section end -->

    <!-- Latest offers section strat -->
    <div class="latest-offers-section content-area-21">
      <div class="container">
        <!-- Main title -->
        <div class="section-header d-flex">
          <h2 data-title="Latest Offers">Our Offers</h2>
        </div>
        <div class="row mb-10" v-if="newCars.length > 0">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="latest-offers-box">
                  <div class="latest-offers-box-inner">
                    <div class="latest-offers-box-overflow">
                      <div class="latest-offers-box-photo">
                        <img class="img-fluid" :src="newCars[0].images[0]" alt="latest-offers" />
                      </div>
                      <div class="info">
                        <h3>
                          <span class="cursor-pointer ourOfferH3Span" @click="viewCarDetails(newCars[0])">{{newCars[0].make}}</span>
                        </h3>
                      </div>
                      <div class="new">{{newCars[0].type}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12" v-if="newCars.length > 1">
                <div class="latest-offers-box">
                  <div class="latest-offers-box-inner">
                    <div class="latest-offers-box-overflow">
                      <div class="latest-offers-box-photo">
                        <img class="img-fluid" :src="newCars[1].images[0]" alt="latest-offers" />
                      </div>
                      <div class="info">
                        <h3>
                          <span class="cursor-pointer ourOfferH3Span" @click="viewCarDetails(newCars[1])">{{newCars[1].make}}</span>
                        </h3>
                      </div>
                      <div class="new">{{newCars[1].type}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12" v-if="newCars.length > 2">
                <div class="latest-offers-box">
                  <div class="latest-offers-box-inner">
                    <div class="latest-offers-box-overflow">
                      <div class="latest-offers-box-photo">
                        <img class="img-fluid" :src="newCars[2].images[0]" alt="latest-offers" />
                      </div>
                      <div class="info">
                        <h3 class="category-title">
                          <span class="cursor-pointer ourOfferH3Span" @click="viewCarDetails(newCars[2])">{{newCars[2].make}}</span>
                        </h3>
                      </div>
                      <div class="new">{{newCars[2].type}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12" v-if="newCars.length > 3">
            <div class="latest-offers-box">
              <div class="latest-offers-box-inner">
                <div class="latest-offers-box-overflow">
                  <div class="latest-offers-box-photo">
                    <div class="latest-offers-box-photodd">
                      <img class="img-fluid big-img" :src="newCars[3].images[0]" alt="latest-offers" />
                    </div>
                  </div>
                  <div class="info">
                    <h3 class="category-title">
                      <span class="cursor-pointer ourOfferH3Span" @click="viewCarDetails(newCars[3])">{{newCars[3].make}}</span>
                    </h3>
                  </div>
                  <div class="new">{{newCars[3].type}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Latest offers section end -->

    <!-- Counters strat -->
    <lazy-car-page-counter></lazy-car-page-counter>
    <!-- Counters end -->

    <!-- Our brand start -->
    <div class="our-team content-area-21">
      <div class="container">
        <!-- Main title -->
        <div class="section-header d-flex">
          <h2 data-title="Brands">Our Brands</h2>
        </div>
        <div
          class="featured-slider row slide-box-btn slider"
          data-slick='{"slidesToShow": 4, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
        >
          <div class="row" v-for="(item, index) in brands" :key="index">
            <div class="">
              <a href="#">
                <img :src="item.img" alt="brand" class="d-block w-24 h-24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Our brand end -->

    <!-- Testimonial 3 start -->
    <lazy-car-testimonial></lazy-car-testimonial>
    <!-- Testimonial 3 end -->

    <!-- Blog start -->
    <div class="blog content-area-21">
      <div class="container">
        <!-- Main title -->
        <div class="section-header d-flex">
          <h2 data-title="Latest News">Our Blog</h2>
        </div>
        <div
          class="featured-slider row slide-box-btn slider"
          data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
        >
          <div class="slide slide-box" v-for="(item, index) in posts" :key="index">
            <div class="blog-3">
              <div class="blog-image">
                <img :src="item.images[0]" alt="blog" class="img-fluid bp" />
                <div class="date-box-2 db-2">{{item.date}}</div>
                <div class="post-meta clearfix">
                  <span
                    ><a href="#"><i class="flaticon-user-1"></i></a>Admin</span
                  >
                  <span
                    ><a href="#"><i class="flaticon-comment"></i></a>17K</span
                  >
                  <span
                    ><a href="#"><i class="flaticon-calendar"></i></a>73k</span
                  >
                </div>
              </div>
              <div class="detail">
                <h3>
                  <button class="b-btn" @click="viewBlogDetails(item)">{{item.header}}</button>
                </h3>
                <p class="truncate ..." v-html="item.description.substring(0, 100) + '...'"></p>
                <button class="b-btn" @click="viewBlogDetails(item)">Rea more...!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog end -->

    <!-- Partners strat -->
    <lazy-car-our-partners></lazy-car-our-partners>
    <!-- Partners end -->

    <!-- Car Overview Modal -->
    <div class="car-model-2">
      <div class="modal fade" id="carOverviewModal" tabindex="-1" role="dialog" aria-labelledby="carOverviewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content" v-if="isModal.data">
            <div class="modal-header">
              <div class="modal-title" id="carOverviewModalLabel">
                <h4>Find Your Dream Car</h4>
                <h5>
                  <!-- FIXME: work on this later -->
                  <i class="flaticon-pin"></i>{{isModal.data.specifications.location}}
                </h5>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row modal-raw">
                <div class="col-lg-6 modal-left">
                  <div class="item active">
                    <img :src="isModal.data.images[0]" alt="best-car" class="img-fluid" />
                    <div class="sobuz">
                      <!-- FIXME: work on this later -->
                      <div class="ratings-2">
                        <span class="ratings-box">4.5/5</span>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        ( 7 Reviews )
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 modal-right">
                  <div class="modal-right-content">
                    <section>
                      <h3>Features</h3>
                      <div class="features">
                        <ul class="bullets">
                          <li v-for="idx in isModal.data.features">{{ idx }}</li>
                        </ul>
                      </div>
                    </section>
                    <section>
                      <h3>Overview</h3>
                      <ul class="bullets">
                        <li>Model</li>
                        <li>Year</li>
                        <li>Condition</li>
                        <li>{{ isModal.data.make }}</li>
                        <li>{{ isModal.data.specifications.year }}</li>
                        <li>{{ isModal.data.specifications.condition }}</li>
                      </ul>
                    </section>
                    <div class="description">
                      <h3>Description</h3>
                      <p class="truncate ..." v-html="isModal.data.description"></p>
                      <!-- <button class="btn btn-md btn-round btn-theme" @click="viewCarDetails(item)">Show Detail</button> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions } from 'vuex';

const brands = [
  {
    img: require('assets/images/toyota.png'),
    name: 'Toyota',
  },
  {
    img: require('assets/images/mitsubishi.png'),
    name: 'Mitsubishi',
  },
  {
    img: require('assets/images/ford.png'),
    name: 'Ford',
  },
  {
    img: require('assets/images/mg.png'),
    name: 'MG',
  },
  {
    img: require('assets/images/chery.png'),
    name: 'Chery',
  },
  {
    img: require('assets/images/honda.png'),
    name: 'Honda',
  },
  {
    img: require('assets/images/kia.png'),
    name: 'Kia',
  },
  {
    img: require('assets/images/hyundai.png'),
    name: 'Hyundai',
  },
  {
    img: require('assets/images/nissan.png'),
    name: 'Nissan',
  },
  {
    img: require('assets/images/isuzu.png'),
    name: 'Isuzu',
  },
  {
    img: require('assets/images/mazda.png'),
    name: 'Mazda',
  },
  {
    img: require('assets/images/suzuki.png'),
    name: 'Suzuki',
  },
];

export default {
  layout: 'site',
  middleware: 'guest',

  computed: {
    ...mapGetters({
      posts: 'blog/getPosts',
      featuredCars: 'car/getFeaturedCars',
      newCars: 'car/getNewCars',
    }),
  },

  data() {
    return {
      brands,
      isModal: { status: false, data: null },
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

    carModal(item: any) {
      this.isModal.visible = true;
      this.isModal.data = item;
    },

    ...mapMutations({
      setCar: 'car/setCar',
      setPost: 'blog/setPost',
    }),

    ...mapActions({
      getDealerApi: 'dealer/getDealerApi',
      getCarsApi: 'car/getCarsApi',
      getPostsApi: 'blog/getPostsApi'
    }),
  },

  mounted() {
    this.$nextTick(() => {
      this.getDealerApi({query: {}});
      this.getPostsApi({query: {}})
      this.getCarsApi({query: {limit: 6}});
    });
  },
};
</script>

<style lang="scss" scoped>
.ourOfferH3Span {
  color: #fff;
  font-size: 22px;
}
</style>
