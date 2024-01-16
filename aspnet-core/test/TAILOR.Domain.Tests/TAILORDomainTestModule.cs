using Volo.Abp.Modularity;

namespace TAILOR;

[DependsOn(
    typeof(TAILORDomainModule),
    typeof(TAILORTestBaseModule)
)]
public class TAILORDomainTestModule : AbpModule
{

}
