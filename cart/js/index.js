$(document).ready(function () {
 
    var selectedComponents = {
        cpu: {
            name: localStorage.getItem("selectedCpuName"),
            img: localStorage.getItem("selectedCpuImg"),
            price: localStorage.getItem("selectedCpuPrice"),
            watts: localStorage.getItem("selectedCpuWatts"),
        },
        gpu: {
            name: localStorage.getItem("selectedGpuName"),
            img: localStorage.getItem("selectedGpuImg"),
            price: localStorage.getItem("selectedGpuPrice"),
            watts: localStorage.getItem("selectedGpuWatts"),
        },
        motherboard: {
            name: localStorage.getItem("selectedMBName"),
            img: localStorage.getItem("selectedMBImg"),
            price: localStorage.getItem("selectedMBPrice"),
            watts: localStorage.getItem("selectedMBWatts"),
        },
        ram: {
            name: localStorage.getItem("selectedRamName"),
            img: localStorage.getItem("selectedRamImg"),
            price: localStorage.getItem("selectedRamPrice"),
            watts: localStorage.getItem("selectedRamWatts"),
        },
        hdd: {
            name: localStorage.getItem("selectedHDDName"),
            img: localStorage.getItem("selectedHDDImg"),
            price: localStorage.getItem("selectedHDDPrice"),
            watts: localStorage.getItem("selectedHDDWatts"),
        },
        psu: {
            name: localStorage.getItem("selectedPSUName"),
            img: localStorage.getItem("selectedpsuImg"),
            price: localStorage.getItem("selectedPSUPrice"),
        },
        cooler: {
            name: localStorage.getItem("selectedCoolerName"),
            img: localStorage.getItem("selectedCoolerImg"),
            price: localStorage.getItem("selectedCoolerPrice"),
            watts: localStorage.getItem("selectedCoolerWatts"),
        },
    };
    //
    function appendToTable(imgSrc, name, watts, price) {
        $("#tBody").append(`
    <tr>
      <td>
        <img class='productImg' src=${imgSrc}>
        <span class='productName'>${name}</span>
      </td>
      <td><span class='watts'>${watts}</span></td>
      <td><span class='price'>${price}</span></td>
    </tr>
  `);
    }
    appendToTable(selectedComponents.cpu.img, selectedComponents.cpu.name, selectedComponents.cpu.watts, selectedComponents.cpu.price);
    appendToTable(selectedComponents.gpu.img, selectedComponents.gpu.name, selectedComponents.gpu.watts, selectedComponents.gpu.price);
    appendToTable(selectedComponents.motherboard.img, selectedComponents.motherboard.name, selectedComponents.motherboard.watts, selectedComponents.motherboard.price);
    appendToTable(selectedComponents.ram.img, selectedComponents.ram.name, selectedComponents.ram.watts, selectedComponents.ram.price);
    appendToTable(selectedComponents.hdd.img, selectedComponents.hdd.name, selectedComponents.hdd.watts, selectedComponents.hdd.price);
    appendToTable(selectedComponents.psu.img, selectedComponents.psu.name,"0", selectedComponents.psu.price);


    if ("selectedCoolerName" in localStorage) {
        appendToTable(selectedComponents.cooler.img, selectedComponents.cooler.name, selectedComponents.cooler.watts, selectedComponents.cooler.price);
    }
    if ("cpuAndCooler" in localStorage) {
        $(".content").append("<h1>" + localStorage.getItem("cpuAndCooler") + "<h1>");
    }

    $(".content").append("<h1>" + localStorage.getItem("cpuAndMBSocket") + "<h1>");
    $(".content").append("<h1>" + localStorage.getItem("cpuAndMBChipset") + "<h1>");
    $(".content").append("<h1>" + localStorage.getItem("gpuAndMB") + "<h1>");
    $(".content").append("<h1>" + localStorage.getItem("RamAndMB") + "<h1>");
    $(".content").append("<h1>" + localStorage.getItem("RamAndMBSpeed") + "<h1>");

    if ("psu" in localStorage) {
        $(".content").append("<h1>" + localStorage.getItem("psu") + "<h1>");
    }
    $(".content h1").each(function () {
        if ($(this).is(':contains("not")')) {
            $(this).css("color", "red");
        }
        else {
            $(this).css("color", "green");
        }
        });
});
