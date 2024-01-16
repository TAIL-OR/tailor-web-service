using Volo.Abp.Modularity;

namespace TAILOR;

[DependsOn(
    typeof(TAILORApplicationModule),
    typeof(TAILORDomainTestModule)
)]
public class TAILORApplicationTestModule : AbpModule
{

}
