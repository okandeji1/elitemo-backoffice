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
            <div class="car-box-2" v-for="(item, index) in featuredCars" :key="index">
              <div class="row g-0">
                <div class="col-lg-5 col-md-5">
                  <div class="car-thumbnail">
                    <span class="car-img">
                      <div class="for">{{ item.type }}</div>
                      <div class="price-box">
                        <span class="del"><del>$950.00</del></span>
                        <br />
                        <span>{{ item.price }}</span>
                      </div>
                      <img class="d-block w-100" :src="item.img" alt="car" />
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
                    <ul class="facilities-list clearfix" v-for="(spec, index) in item.specifications" :key="index">
                      <li><i class="flaticon-fuel"></i> {{ spec.fuelType }}</li>
                      <li><i class="flaticon-way"></i> {{ spec.speed }}</li>
                      <li><i class="flaticon-manual-transmission"></i> {{ spec.transmission }}</li>
                      <li><i class="flaticon-car"></i> {{ spec.carType }}</li>
                      <li><i class="flaticon-gear"></i> {{ spec.gear }}</li>
                      <li><i class="flaticon-calendar-1"></i> {{ spec.year }}</li>
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
                <form method="GET">
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
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
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
                  <div class="range-slider clearfix">
                    <label>Price</label>
                    <div
                      data-min="0"
                      data-max="150000"
                      data-min-name="min_price"
                      data-max-name="max_price"
                      data-unit="USD"
                      class="range-slider-ui ui-slider"
                      aria-disabled="false"
                    ></div>
                    <div class="clearfix"></div>
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
                    <button class="search-button btn">Search</button>
                  </div>
                </form>
              </div>
              <!-- Recent posts start -->
              <div class="widget recent-posts">
                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <div class="d-flex mb-4 recent-posts-box" v-for="(item, index) in blogs" :key="index">
                  <a href="#">
                    <img :src="item.img" class="flex-shrink-0 me-3" alt="i" />
                  </a>
                  <div class="align-self-center">
                    <h5>
                      <span @click="viewBlogDetails(item)">{{ item.title }}</span>
                    </h5>
                    <div class="listing-post-meta">
                      $345,00 | <a href="#"><i class="fa fa-calendar"></i> J{{ item.date }}</a>
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
                </ul>
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
const featuredCars = [
  {
    img: 'img/car/car-1.jpg',
    make: 'Lamborghini',
    price: '$1050.00',
    model: '2.2L XLS 4x2 MT',
    type: 'For Sale',
    bodyStyle: 'Covertible',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        way: '4,000 km',
        transmission: 'Manual',
        car: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
  {
    img: 'img/car/car-2.jpg',
    make: 'Ferrari Red Car',
    price: '$780.00',
    model: '2.2L XLS 4x2 MT',
    type: 'Featured',
    bodyStyle: 'Covertible',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        speed: '4,000 km',
        transmission: 'Manual',
        carType: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
  {
    img: 'img/car/car-3.jpg',
    make: 'Bmw e46 m3 Diski Serie',
    price: '$$940.00',
    model: '2.2L XLS 4x2 MT',
    type: 'For Rent',
    bodyStyle: 'Covertible',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        way: '4,000 km',
        transmission: 'Manual',
        car: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
  {
    img: 'img/car/car-4.jpg',
    make: 'Volkswagen Scirocco',
    price: '$1050.00',
    model: '2.2L XLS 4x2 MT',
    type: 'Featured',
    bodyStyle: 'Sedan',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        way: '4,000 km',
        transmission: 'Manual',
        car: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
  {
    img: 'img/car/car-5.jpg',
    make: 'Porsche Cayen Last',
    price: '$780.00',
    model: '2.2L XLS 4x2 MT',
    type: 'For Sale',
    bodyStyle: 'Covertible',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        way: '4,000 km',
        transmission: 'Manual',
        car: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
  {
    img: 'img/car/car-6.jpg',
    make: 'Lexus GS F',
    price: '$940.00',
    model: '2.2L XLS 4x2 MT',
    type: 'Featured',
    bodyStyle: 'Covertible',
    condition: 'Brand New',
    mileage: '34,000 mi',
    interiorColor: 'Dark Grey',
    engine: '3.4L Mid-Engine V6',
    gears: '5',
    specifications: [
      {
        fuelType: 'Petrol',
        way: '4,000 km',
        transmission: 'Manual',
        car: 'Sport',
        gear: 'Blue',
        year: '2022',
        horsePower: '310',
        topSpeed: '270',
        driveTrain: 'Front Wheel',
        doors: '4',
        location: 'Lagos, Nigeria',
        bodyStyle: 'Sedan',
      },
    ],
    features: [
      'Cruise Control',
      'Airbags',
      'Air Conditioning',
      'Alarm System',
      'Audio Interface',
      'CDR Audio',
      'Seat Heating',
      'Park Assist',
      'Automatic Climate Control',
      'Auto Start/Stop',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, e pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.',
  },
];

export default {
  layout: 'site',
  middleware: 'guest',
  computed: {
    ...mapGetters({
      blogs: 'blog/getBlogs',
      // featuredCars: 'car/getFeaturedCars',
    }),
  },

  data() {
    return {
      featuredCars,
    };
  },

  methods: {
    viewCarDetails(data) {
      this.setCar(data);

      this.$router.push({ path: '/car-details' });
    },

    viewBlogDetails(data) {
      this.setBlog(data);

      this.$router.push({ path: '/blog-details' });
    },

    ...mapMutations({
      setCar: 'car/setCar',
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
