using TAILOR.Samples;
using Xunit;

namespace TAILOR.EntityFrameworkCore.Applications;

[Collection(TAILORTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<TAILOREntityFrameworkCoreTestModule>
{

}
