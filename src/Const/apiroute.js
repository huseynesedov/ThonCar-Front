export const apiRoutes = {
    // Manufacturer
    manufacturer: {
        getManufacturerListByProductType: '/catalog/v1/Manufacturer/GetManufacturerListByProductType',
        getManufacturerList: '/catalog/v1/Manufacturer/GetManufacturerList',
        test: '/catalog/v1/Manufacturer/Test',
    },

    // Order
    order: {
        getByOrderId: '/order/v1/OrderDetail/GetByOrderId',
        getOrderDetailStatusList: '/catalog/v1/Order/GetOrderDetailStatusList',
        getOrderStatusList: '/catalog/v1/Order/GetOrderStatusList',
        getOrderTypeList: '/catalog/v1/Order/GetOrderTypeList',
        getShipmentStatusList: '/catalog/v1/Order/GetShipmentStatusList',
        getShipmentTypeList: '/catalog/v1/Order/GetShipmentTypeList',
        test: '/catalog/v1/Order/Test',
        add: '/order/v1/Order/Add',
        getSearchTable: '/order/v1/Order/GetSearchTable',
        baseTest: '/order/v1/Base/Test',
    },

    // Product
    product: {
        decryptBase: '/product/v1/Base/Decrypt',
        encryptBase: '/product/v1/Base/Encrypt',
        decryptProduct: '/product/v1/Product/Decrypt',
        encryptProduct: '/product/v1/Product/Encrypt',
        getById: '/product/v1/Product/GetById',
        getCrossListByProductId: '/product/v1/Product/GetCrossListByProductId',
        getManufacturerAdditionalDiscountById: '/product/v1/Product/GetManufacturerAdditionalDiscountById',
        getOemByProductId: '/product/v1/Product/GetOemByProductId',
        getProductAdditionalDiscountById: '/product/v1/Product/GetProductAdditionalDiscountById',
        getProductGroupsById: '/product/v1/Product/GetProductGroupsById',
        getProductPricesById: '/product/v1/Product/GetProductPricesById',
        getProductQuantitiesById: '/product/v1/Product/GetProductQuantitiesById',
        getSearchTable: '/product/v1/Product/GetSearchTable',
        getShelfAdressesById: '/product/v1/Product/GetShelfAdressesById',
        getVehicleBrandById: '/product/v1/Product/GetVehicleBrandById',
        getVehicleListByProductId: '/product/v1/Product/GetVehicleListByProductId',
        getBestSeller: '/product/v1/Product/GetBestSeller',
        getVehicleModelById: '/product/v1/Product/GetVehicleModelById',
        getProductStockMovements: '/product/v1/Product/GetProductStockMovements',
    },

    // VehicleBrand
    vehicleBrand: {
        getListAsync: '/catalog/v1/VehicleBrand/GetList',
        test: '/catalog/v1/VehicleBrand/Test',
    },

    // Basket
    basket: {
        decryptBase: '/basket/v1/Base/Decrypt',
        encryptBase: '/basket/v1/Base/Encrypt',
        baseTest: '/basket/v1/Base/Test',
        addToBasket: '/basket/v1/BasketDetail/AddToBasket',
        decryptBasketDetail: '/basket/v1/BasketDetail/Decrypt',
        deleteAllBasketDetails: '/basket/v1/BasketDetail/DeleteAll',
        deleteBasketDetailById: '/basket/v1/BasketDetail/DeleteById',
        deleteBasketDetailByIds: '/basket/v1/BasketDetail/DeleteByIds',
        encryptBasketDetail: '/basket/v1/BasketDetail/Encrypt',
        getListByCurrentCustomer: '/basket/v1/BasketDetail/GetListByCurrent',
        getListByProductType: '/basket/v1/BasketDetail/GetListByProductType',
        getTotalPrice: '/basket/v1/BasketDetail/GetTotalPrice',
        basketDetailTest: '/basket/v1/BasketDetail/Test',
        updateQuantity: '/basket/v1/BasketDetail/UpdateQuantity',
        updateStatus: '/basket/v1/BasketDetail/UpdateStatus',
        updateStatusByProductTypeId: '/basket/v1/BasketDetail/UpdateStatusByProductTypeId',
        returnProduct: '/basket/v1/ReturnProductCardDetail/ReturnProduct',
        addReturnProductCard: '/basket/v1/ReturnProductCardDetail/Add',
        addReturnProduct: '/basket/v1/ReturnProductCard/Add',
        returnProductCardDetail: {
            deleteById: '/basket/v1/ReturnProductCardDetail/DeleteById',
            encrypt: '/basket/v1/ReturnProductCardDetail/Encrypt',
            getListByCurrent: '/basket/v1/ReturnProductCardDetail/GetListByCurrent',
            getTotalInfo: '/basket/v1/ReturnProductCardDetail/GetTotalInfo',
            returnProduct: '/basket/v1/ReturnProductCardDetail/ReturnProduct',
            test: '/basket/v1/ReturnProductCardDetail/Test',
            updateNote: '/basket/v1/ReturnProductCardDetail/UpdateNote',
            updateQuantity: '/basket/v1/ReturnProductCardDetail/UpdateQuantity',
            updateStatusAndReturnProductId: '/basket/v1/ReturnProductCardDetail/UpdateStatusAndReturnProductId',
        }
    },
    // account
    account: {
        adminLogin: '/account/v1/Account/AdminLogin',
        decrypt: '/account/v1/Account/Decrypt',
        encrypt: '/account/v1/Account/Encrypt',
        login: '/account/v1/Account/Login',
        refreshToken: '/account/v1/Account/RefreshToken',
        test: '/account/v1/Account/Test',
    },
    // user
    user: {
        addCustomerUser: '/admin/v1/User/AddCustomerUser',
        addSalesmanUser: '/admin/v1/User/AddSalesmanUser',
        deleteUser: '/admin/v1/User/Delete',
        getUserById: '/admin/v1/User/GetById',
        getForUpdateById: '/admin/v1/User/GetForUpdateById',
        getUserTable: '/admin/v1/User/GetTable',
        getUserPersonalInformationById: '/admin/v1/User/GetUserPersonalInformationById',
        updateUser: '/admin/v1/User/Update',
        updateUserPassword: '/admin/v1/User/UpdatePassword',
        test: '/admin/v1/User/Test',
    },
    // Catalog
    catalog: {
        baseTest: '/catalog/v1/Base/Test',
        getProductGroupList: '/catalog/v1/Product/GetProductGroupList',
        getProductGroupListByProductType: '/catalog/v1/Product/GetProductGroupListByProductType',
        getProductTypeList: '/catalog/v1/Product/GetProductTypeList',
        productTest: '/catalog/v1/Product/Test',
        getBasketDetailStatusList: '/catalog/v1/BasketDetailStatus/GetBasketDetailStatusList',
        getPaymentTypeList: '/catalog/v1/PaymentType/GetPaymentTypeList',
    },
    storage:{
        storageGetList: '/catalog/v1/Storage/GetList',
    },
    // ProductHealthStatus
    productHealthStatus: {
        getProductHealthStatusList: '/catalog/v1/ProductHealthStatus/GetProductHealthStatusList',
        test: '/catalog/v1/ProductHealthStatus/Test',
    },

    // ReturnProductDetailStatus
    returnProductDetailStatus: {
        getReturnProductDetailStatusList: '/catalog/v1/ReturnProductDetailStatus/GetReturnProductDetailStatusList',
        test: '/catalog/v1/ReturnProductDetailStatus/Test',
    },

    // ReturnProductStatus
    returnProductStatus: {
        getReturnProductStatusList: '/catalog/v1/ReturnProductStatus/GetReturnProductStatusList',
        test: '/catalog/v1/ReturnProductStatus/Test',
    },
};