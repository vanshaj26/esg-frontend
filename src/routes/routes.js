import DashboardLayout from "src/pages/Layout/DashboardLayout.vue";
import AuthLayout from "src/pages/Pages/AuthLayout.vue";
//import VueRouter from "vue-router";

// GeneralViews
import NotFound from "src/pages/GeneralViews/NotFoundPage.vue";

// Calendar
const Calendar = () =>
  import(
    /* webpackChunkName: "extra" */ "src/pages/Calendar/CalendarRoute.vue"
  );
// Charts
const Charts = () =>
  import(/* webpackChunkName: "dashboard" */ "src/pages/Charts.vue");

// Components pages
const Buttons = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/Buttons.vue"
  );
const GridSystem = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/GridSystem.vue"
  );
const Panels = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/Panels.vue"
  );
const SweetAlert = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/SweetAlert.vue"
  );
const Notifications = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/Notifications.vue"
  );
const Icons = () =>
  import(/* webpackChunkName: "components" */ "src/pages/Components/Icons.vue");
const Typography = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Components/Typography.vue"
  );

// Dashboard pages
const Dashboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "src/pages/Dashboard/Dashboard.vue"
  );

  const DashboardUser = () =>
  import(
    /* webpackChunkName: "dashboard" */ "src/pages/Dashboard/ClientDashboard.vue"
  );
import Widgets from "src/pages/Widgets.vue";

// Forms pages
const RegularForms = () => import("src/pages/Forms/RegularForms.vue");
const ExtendedForms = () => import("src/pages/Forms/ExtendedForms.vue");
const ValidationForms = () => import("src/pages/Forms/ValidationForms.vue");
const Wizard = () => import("src/pages/Forms/Wizard.vue");

// Maps pages
const GoogleMaps = () =>
  import(/* webpackChunkName: "extra" */ "src/pages/Maps/GoogleMaps.vue");
const FullScreenMap = () =>
  import(/* webpackChunkName: "extra" */ "src/pages/Maps/FullScreenMap.vue");
const VectorMaps = () =>
  import(/* webpackChunkName: "extra" */ "src/pages/Maps/VectorMaps.vue");

// Pages
const User = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/UserProfile.vue");
const Pricing = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/Pricing.vue");
const TimeLine = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/TimeLinePage.vue");
const Login = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/Login.vue");
const Register = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/Register.vue");
const RTL = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/RTLPage.vue");
const Lock = () =>
  import(/* webpackChunkName: "pages" */ "src/pages/Pages/Lock.vue");

// Data

const DataStatus = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Data/data_status.vue");

const AddData = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Data/add_data.vue");

const ReviewData = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Data/review_data.vue");
  const ReviewData1 = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Data/reviewdata1.vue");

//goal
const Goal = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Goals/goal.vue");

//reporting
const Reporting = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Reporting/reporting.vue");

//general data
const General = () =>
  import(
    /* webpackChunkName: "data" */ "src/pages/GeneralData/general_data.vue"
  );

//Environmental
const Environmental = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Env/env.vue");

  const Question = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Question/Question.vue");

  const addques = () =>
  import(/* webpackChunkName: "data" */ "src/pages/AddQuestion/AddQuestion.vue");

//social
const Social = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Social/social.vue");

//social
const org = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Org/AddOrg.vue");
  const adduser = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Org/AddUser.vue");

  const addcat = () =>
  import(/* webpackChunkName: "data" */ "src/pages/Org/AddCat.vue");
// TableList pages
const RegularTables = () =>
  import(/* webpackChunkName: "tables" */ "src/pages/Tables/RegularTables.vue");
const ExtendedTables = () =>
  import(
    /* webpackChunkName: "tables" */ "src/pages/Tables/ExtendedTables.vue"
  );
const PaginatedTables = () =>
  import(
    /* webpackChunkName: "tables" */ "src/pages/Tables/PaginatedTables.vue"
  );
let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons }
    },
    {
      path: "grid-system",
      name: "Grid System",
      components: { default: GridSystem }
    },
    {
      path: "panels",
      name: "Panels",
      components: { default: Panels }
    },
    {
      path: "sweet-alert",
      name: "Sweet Alert",
      components: { default: SweetAlert }
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications }
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons }
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography }
    }
  ]
};
let formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/regular",
  name: "Forms",
  children: [
    {
      path: "regular",
      name: "Regular Forms",
      components: { default: RegularForms }
    },
    {
      path: "extended",
      name: "Extended Forms",
      components: { default: ExtendedForms }
    },
    {
      path: "validation",
      name: "Validation Forms",
      components: { default: ValidationForms }
    },
    {
      path: "wizard",
      name: "Wizard",
      components: { default: Wizard }
    }
  ]
};

let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables }
    },
    {
      path: "extended",
      name: "Extended Tables",
      components: { default: ExtendedTables }
    },
    {
      path: "paginated",
      name: "Paginated Tables",
      components: { default: PaginatedTables }
    }
  ]
};

let mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "Google Maps",
      components: { default: GoogleMaps }
    },
    {
      path: "full-screen",
      name: "Full Screen Map",
      meta: {
        hideContent: true,
        hideFooter: true
      },
      components: { default: FullScreenMap }
    },
    {
      path: "vector-map",
      name: "Vector Map",
      components: { default: VectorMaps }
    }
  ]
};

let pagesMenu = {
  path: "/pages",
  component: DashboardLayout,
  name: "Pages",
  redirect: "/pages/user",
  children: [
    {
      path: "user",
      name: "User Page",
      components: { default: User }
    },
    {
      path: "timeline",
      name: "Timeline Page",
      components: { default: TimeLine }
    },
    {
      path: "rtl",
      name: "RTL Page",
      components: { default: RTL }
    }
  ]
};

let dataMenu = {
  path: "/data",
  component: DashboardLayout,
  name: "Data",
  meta: { requiresAuthuser: true },
  redirect: "/data/datastatus",
  children: [
    {
      path: "datastatus",
      name: "Data Status",
      components: { default: DataStatus }
    },
    {
      path: "adddata",
      name: "Add Data",
      components: { default: AddData }
    },
    {
      path: "review",
      name: "Review Data",
      components: { default: ReviewData }
    },
    
  ]
};


let adminmenu = {
  path: "",
  component: DashboardLayout,
  name: "Org",
  redirect: "/organisation",
  meta: { requiresAuth3: true },
  children: [
    {
      path: "organisation",
      name: "Organisation",
      components: { default: org }
    },
    {
      path: "adduser",
      name: "Add User",
      components: { default: adduser }
    },

    {
      path: "addcat",
      name: "Add Category",
      components: { default: addcat }
    },
    {
      path: "addques",
      name: "Add Question",
      components: { default: addques }
    }
  ]
};

let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth1: true }
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/pricing",
      name: "Pricing",
      component: Pricing
    },
    {
      path: "/lock",
      name: "Lock",
      component: Lock
    }
  ]
};

let authAdminPages = {
  path: "/",
  component: DashboardLayout,
  redirect: "/dashboard",
  name: "Dashboard Admin",
  meta: { requiresAuth2: true },
  children: [
    {
      path: "dashboard",
      name: "Admin",
      components: { default: Dashboard },
     
    }
  ]
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home"
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  dataMenu,
  authPages,
  adminmenu,
  authAdminPages,
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/userdashboard",
    name: "Dashboard layout",
    meta: { requiresAuthuser: true },
    children: [
      
      {
        path: "userdashboard",
        name: "Dashboard",
        components: { default: DashboardUser },
        
      },

      {
        path: "goal",
        name: "Goal and KPIs",
        components: { default: Goal }
      },
      {
        path: "reporting",
        name: "Reporting",
        components: { default: Reporting }
      },
      {
        path: "general",
        name: "General Data",
        components: { default: General }
      },

      {
        path: "env",
        name: "Environmental",
        components: { default: Environmental }
      },
      {
        path: "social",
        name: "Social",
        components: { default: Social }
      },
      {
        path: "question",
        name: "Question",
        components: { default: Question }
      },
      {
        path: "review1",
        name: "Review",
        components: { default: ReviewData1 }
      }
      
    ]
  },
  { path: "*", component: NotFound }
];

export default routes;
// export default router;
