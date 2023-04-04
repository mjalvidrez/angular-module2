// js file for module 2 assignment 
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ctrl1 = this;

        ctrl1.theitems = ShoppingListCheckOffService.getToBuyItems();
        

        ctrl1.Buy = function(itemIndex) {
            ShoppingListCheckOffService.buyService(itemIndex);
        }

        // make the function to check if empty
        ctrl1.isBuyEmpty = function(theitems) {
            if(theitems.length == 0){
                return true;
            }
            else{
                return false;
            }
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrl2 = this;

        ctrl2.theitems = ShoppingListCheckOffService.getBoughtItems();

        // make the function to check if empty
        ctrl2.isBoughtEmpty = function(theitems) {
            if(theitems.length == 0){
                return true;
            }
            else{
                return false;
            }
        }
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var BoughtItems = [];

        // making pre built items
        var BuyItems = [
            {name: "healing hands", quantity: 2},
            {name: "fireball", quantity: 5},
            {name: "goring rush", quantity: 1},
            {name: "holy smite", quantity: 3},
            {name: "thundering smite", quantity: 2}
        ];

        // get items
        service.getToBuyItems = function () {
            return BuyItems;
        }

        // buy items
        service.getBoughtItems = function () {
            return BoughtItems;
        }

        service.buyService = function (itemIndex) {
            BoughtItems.push(BuyItems[itemIndex]);
            BuyItems.splice(itemIndex, 1);
        }
    }

})();