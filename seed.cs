using AfComputerBuilder.Data;
using AfComputerBuilder.Models;

namespace AfComputerBuilder
{
    /*  public class Seed
      {
          private readonly DataContext dataContext;
          /* public Seed(DataContext dataContext)
          {
              this.dataContext = dataContext;
          }*/

    /*  public static void Seeder(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                context.Database.EnsureCreated();

                if (!context.psuComponent.Any())
                {
                    context.psuComponent.AddRange(new List<psuComponent>()
                    {
                new psuComponent() {
                 id = 0,
                name = "test3",
                formFactor = "d",
                powerOutput="d",
                efficiencyRating="f",
                 modularity="0",
                 img ="https://motherboarddb.com/media/__sized__/images/Asrock/B450MSteelLegend/B450M_Steel_Legend-1-thumbnail-300x300.png",
                 price=0,
                 protection= "p"
                        },
                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
 
         /*   if (!dataContext.cpuComponent.Any())
            {
                IList<cpuComponent> component = new List<cpuComponent>()
                {
                    new cpuComponent()
                    {
                        Name="Test",
                        Cashe="0",
                        Clock = "0",
                        totalCores = 0 ,
                        maxTurbo = "0",
                        releaseYear = "0" ,
                        Socket = "d",
                        Threds = "0",
                        Price = 0 ,
                     
                        Watts = 255 }
                };

                dataContext.cpuComponent.AddRange(component);
                dataContext.SaveChanges();
            }
            if (!dataContext.motherBoardComponent.Any())
            {
                IList<motherBoardComponent> component = new List<motherBoardComponent>()
                {
                    new motherBoardComponent()
                    {
                        Name="Test",
                        bus=0,
                         Chipset="0",
                         formFactor="0",
                          motherBoardImg="0",
                        ramCapacity="0",
                       sli="0",
                     slotProtcol ="0",
                      usbSlots="0",
                        releaseYear = "0" ,
                        Socket = "d",
                     
                        Price = 0 ,

                        watts = 255 }
                };

                dataContext.motherBoardComponent.AddRange(component);
                dataContext.SaveChanges();
            }
            if (!dataContext.GpuComponent.Any())
            {
                IList<GpuComponent> component = new List<GpuComponent>()
                {
                    new GpuComponent()
                    {
                        Name="Test",
                        Bus="0",
                       
                         Memory="0",
                           price =0,

                        Clock = 0 ,

                        Watts = 255 }
                };

                dataContext.GpuComponent.AddRange(component);
                dataContext.SaveChanges();
            }
            if (!dataContext.hardDiskComponent.Any())
            {
                IList<hardDiskComponent> component = new List<hardDiskComponent>()
                {
                    new hardDiskComponent()
                    {
                        Name="Test",
                        Capacity="0",

                         Read="0",
                           Write ="0",

                        Price = 0 ,

                        Watts = "255" }
                };

                dataContext.hardDiskComponent.AddRange(component);
                dataContext.SaveChanges();
            }
            if (!dataContext.psuComponent.Any())
            {
                var<psuComponent> component = new List<psuComponent>()
                {
                    new psuComponent()
                    {
                        name="Test",
                        formFactor="0",

                         powerOutput="0",
                           efficiencyRating ="0",
                           Modularity= "0",
                        price = 0 ,

                        Protection = "255" }
                };

                dataContext.psuComponent.Add(component);
                dataContext.SaveChanges();
            } */




}