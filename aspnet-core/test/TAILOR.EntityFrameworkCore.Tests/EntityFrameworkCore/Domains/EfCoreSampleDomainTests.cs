using TAILOR.Samples;
using Xunit;

namespace TAILOR.EntityFrameworkCore.Domains;

[Collection(TAILORTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<TAILOREntityFrameworkCoreTestModule>
{

}
