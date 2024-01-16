using Volo.Abp.Modularity;

namespace TAILOR;

public abstract class TAILORApplicationTestBase<TStartupModule> : TAILORTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
